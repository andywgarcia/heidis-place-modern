output "s3_bucket_name" {
  description = "Name of the S3 bucket for the SPA"
  value       = aws_s3_bucket.spa.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for cache invalidation)"
  value       = aws_cloudfront_distribution.spa.id
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain"
  value       = aws_cloudfront_distribution.spa.domain_name
}

output "github_actions_role_arn" {
  description = "IAM role ARN for GitHub Actions to assume via OIDC"
  value       = aws_iam_role.github_actions.arn
}

output "site_url" {
  description = "Live site URL"
  value       = "https://${local.staging_domain}"
}

output "production_site_url" {
  description = "Production apex URL served by the CloudFront distribution after external DNS cutover"
  value       = "https://${var.production_domain}"
}

output "cloudfront_aliases" {
  description = "Aliases attached to the CloudFront distribution"
  value       = aws_cloudfront_distribution.spa.aliases
}

output "certificate_arn" {
  description = "ACM certificate ARN used by CloudFront"
  value       = aws_acm_certificate.spa.arn
}

output "external_dns_cutover_records" {
  description = "Records to create in the external DNS provider after CloudFront deploys"
  value = {
    apex = {
      type  = "ALIAS/ANAME/flattened CNAME"
      name  = var.production_domain
      value = aws_cloudfront_distribution.spa.domain_name
    }
    www = {
      type  = "CNAME"
      name  = "www.${var.production_domain}"
      value = aws_cloudfront_distribution.spa.domain_name
    }
  }
}
