###############################################################################
# Provider & data
###############################################################################

terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
  default_tags {
    tags = {
      Project   = "heidis-place"
      ManagedBy = "terraform"
    }
  }
}

# ACM certs for CloudFront MUST be in us-east-1
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
  default_tags {
    tags = {
      Project   = "heidis-place"
      ManagedBy = "terraform"
    }
  }
}

locals {
  staging_domain     = "${var.subdomain}.${var.domain_name}"
  production_domains = var.enable_production_domains ? [var.production_domain, "www.${var.production_domain}"] : []
  cloudfront_aliases = sort(distinct(concat([local.staging_domain], local.production_domains)))
  bucket_name        = "${var.subdomain}-${replace(var.domain_name, ".", "-")}"
  production_mail_cnames = {
    imap = "imap.secureserver.net."
    mail = "pop.secureserver.net."
    pop  = "pop.secureserver.net."
    smtp = "smtp.secureserver.net."
  }
}

data "aws_route53_zone" "main" {
  name         = var.domain_name
  private_zone = false
}

###############################################################################
# S3 bucket — private, no public access
###############################################################################

resource "aws_s3_bucket" "spa" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_server_side_encryption_configuration" "spa" {
  bucket = aws_s3_bucket.spa.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_ownership_controls" "spa" {
  bucket = aws_s3_bucket.spa.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_public_access_block" "spa" {
  bucket                  = aws_s3_bucket.spa.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "spa" {
  bucket = aws_s3_bucket.spa.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontOAC"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.spa.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.spa.arn
          }
        }
      }
    ]
  })
}

###############################################################################
# ACM certificate (us-east-1, DNS-validated)
###############################################################################

resource "aws_acm_certificate" "spa" {
  provider    = aws.us_east_1
  domain_name = var.production_domain
  subject_alternative_names = [
    local.staging_domain,
    "www.${var.production_domain}",
  ]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
    ignore_changes = [
      tags,
      tags_all,
    ]
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.spa.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    } if dvo.domain_name == local.staging_domain
  }

  zone_id = data.aws_route53_zone.main.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]
}

resource "aws_acm_certificate_validation" "spa" {
  provider        = aws.us_east_1
  certificate_arn = aws_acm_certificate.spa.arn
  validation_record_fqdns = concat(
    [for r in aws_route53_record.cert_validation : r.fqdn],
    var.external_certificate_validation_record_fqdns,
  )

  depends_on = [aws_route53_record.production_cert_validation]
}

###############################################################################
# CloudFront OAC + Distribution
###############################################################################

resource "aws_cloudfront_origin_access_control" "spa" {
  name                              = local.bucket_name
  description                       = "Managed by Terraform"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "Managed-SecurityHeadersPolicy"
}

resource "aws_cloudfront_distribution" "spa" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = local.cloudfront_aliases
  price_class         = "PriceClass_100" # US, Canada, Europe — cheapest
  tags = {
    jarvis-enabled = "true"
  }

  origin {
    domain_name              = aws_s3_bucket.spa.bucket_regional_domain_name
    origin_id                = "s3-spa"
    origin_access_control_id = aws_cloudfront_origin_access_control.spa.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-spa"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 31536000

    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id
  }

  # SPA routing: return index.html for 403/404 so react-router handles it
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.spa.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

###############################################################################
# Route 53 — subdomain alias to CloudFront
###############################################################################

resource "aws_route53_record" "spa" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = local.staging_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.spa.domain_name
    zone_id                = aws_cloudfront_distribution.spa.hosted_zone_id
    evaluate_target_health = false
  }
}

###############################################################################
# Route 53 — production DNS zone
###############################################################################

resource "aws_route53_zone" "production" {
  name = var.production_domain
}

resource "aws_route53_record" "production_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.spa.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    } if dvo.domain_name != local.staging_domain
  }

  zone_id = aws_route53_zone.production.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]
}

resource "aws_route53_record" "production_apex_a" {
  zone_id = aws_route53_zone.production.zone_id
  name    = var.production_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.spa.domain_name
    zone_id                = aws_cloudfront_distribution.spa.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "production_apex_aaaa" {
  zone_id = aws_route53_zone.production.zone_id
  name    = var.production_domain
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.spa.domain_name
    zone_id                = aws_cloudfront_distribution.spa.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "production_www_a" {
  zone_id = aws_route53_zone.production.zone_id
  name    = "www.${var.production_domain}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.spa.domain_name
    zone_id                = aws_cloudfront_distribution.spa.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "production_www_aaaa" {
  zone_id = aws_route53_zone.production.zone_id
  name    = "www.${var.production_domain}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.spa.domain_name
    zone_id                = aws_cloudfront_distribution.spa.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "production_mx" {
  zone_id = aws_route53_zone.production.zone_id
  name    = var.production_domain
  type    = "MX"
  ttl     = 3600
  records = [
    "0 smtp.secureserver.net.",
    "10 mailstore1.secureserver.net.",
  ]
}

resource "aws_route53_record" "production_mail_cnames" {
  for_each = local.production_mail_cnames

  zone_id = aws_route53_zone.production.zone_id
  name    = "${each.key}.${var.production_domain}"
  type    = "CNAME"
  ttl     = 3600
  records = [each.value]
}

###############################################################################
# GitHub Actions OIDC — no long-lived keys
###############################################################################

# GitHub OIDC provider — if this already exists in your AWS account, import it:
# terraform import aws_iam_openid_connect_provider.github arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]

  lifecycle {
    ignore_changes = [thumbprint_list]
  }
}

resource "aws_iam_role" "github_actions" {
  name = "github-actions-${local.bucket_name}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = aws_iam_openid_connect_provider.github.arn
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
          }
          StringLike = {
            "token.actions.githubusercontent.com:sub" = "repo:${var.github_org}/${var.github_repo}:ref:refs/heads/main"
          }
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "github_actions" {
  name = "deploy-spa"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3Sync"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.spa.arn,
          "${aws_s3_bucket.spa.arn}/*"
        ]
      },
      {
        Sid      = "CloudFrontInvalidate"
        Effect   = "Allow"
        Action   = "cloudfront:CreateInvalidation"
        Resource = aws_cloudfront_distribution.spa.arn
      }
    ]
  })
}
