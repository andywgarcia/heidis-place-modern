###############################################################################
# Existing production resources
###############################################################################

# The live Heidi's Place stack was originally created by Terraform, but the
# state file is not present in this repository. These import blocks let an
# authorized Terraform run adopt the existing resources before applying changes.

import {
  to = aws_s3_bucket.spa
  id = "heidis-place-andys-codex-com"
}

import {
  to = aws_s3_bucket_server_side_encryption_configuration.spa
  id = "heidis-place-andys-codex-com"
}

import {
  to = aws_s3_bucket_ownership_controls.spa
  id = "heidis-place-andys-codex-com"
}

import {
  to = aws_s3_bucket_public_access_block.spa
  id = "heidis-place-andys-codex-com"
}

import {
  to = aws_s3_bucket_policy.spa
  id = "heidis-place-andys-codex-com"
}

import {
  to = aws_acm_certificate.spa
  id = "arn:aws:acm:us-east-1:228732469808:certificate/5396db66-554d-40fc-9524-5d19e8ae5747"
}

import {
  to = aws_cloudfront_origin_access_control.spa
  id = "E2GLFMN802UCW9"
}

import {
  to = aws_cloudfront_distribution.spa
  id = "E1TMNG3NQ9SVLO"
}

import {
  to = aws_route53_record.cert_validation["heidis-place.andys-codex.com"]
  id = "Z0710887UZ6VZIPS9VFL__43dc6ac9c7a40f3eb45590a43137b977.heidis-place.andys-codex.com_CNAME"
}

import {
  to = aws_route53_record.spa
  id = "Z0710887UZ6VZIPS9VFL_heidis-place.andys-codex.com_A"
}

import {
  to = aws_iam_openid_connect_provider.github
  id = "arn:aws:iam::228732469808:oidc-provider/token.actions.githubusercontent.com"
}

import {
  to = aws_iam_role.github_actions
  id = "github-actions-heidis-place-andys-codex-com"
}

import {
  to = aws_iam_role.github_terraform
  id = "github-actions-terraform-heidis-place-andys-codex-com"
}

import {
  to = aws_iam_role_policy.github_actions
  id = "github-actions-heidis-place-andys-codex-com:deploy-spa"
}
