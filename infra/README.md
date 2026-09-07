# Heidi's Place Infrastructure

This directory is the source of truth for the Heidi's Place AWS hosting stack.

## Managed In Terraform

- S3 bucket `heidis-place-andys-codex-com`
- S3 public access block, ownership controls, bucket policy, and default encryption
- ACM certificate in `us-east-1` for:
  - `heidisplaceframes.com`
  - `www.heidisplaceframes.com`
  - `heidis-place.andys-codex.com`
- CloudFront origin access control
- CloudFront distribution `E1TMNG3NQ9SVLO`
- Route53 staging record for `heidis-place.andys-codex.com`
- Route53 staging ACM validation record
- Route53 production hosted zone for `heidisplaceframes.com`
- Route53 production apex and `www` CloudFront alias records
- Route53 production ACM validation records
- Route53 production GoDaddy/SecureServer mail records
- GitHub Actions OIDC provider
- GitHub Actions deploy role and deploy policy

## Not Managed Here

The domain registrar is still external. After Terraform creates the Route53 hosted zone, update the registrar nameservers for `heidisplaceframes.com` to the `production_route53_nameservers` output.

As of 2026-09-07 13:08 PDT, applying the Route53 production hosted zone is blocked because IAM user `openclaw-jarvis` lacks `route53:CreateHostedZone` and production-domain `route53:ChangeResourceRecordSets`.

## State Recovery

The live AWS resources are tracked in local Terraform state. For a fresh machine or remote backend, do not run a normal apply against empty state. First run Terraform with the import blocks in `imports.tf` using an AWS principal that can read and update CloudFront, ACM, S3, Route53, and IAM.

Recommended first recovery flow for a fresh machine or remote backend:

```sh
terraform -chdir=infra init
terraform -chdir=infra plan -out=tfplan
terraform -chdir=infra apply tfplan
terraform -chdir=infra state list
```

Expected high-level result after imports: existing resources are adopted into state. CloudFront should already have `heidisplaceframes.com`, `www.heidisplaceframes.com`, `heidis-place.andys-codex.com`, and the combined certificate.

As of 2026-09-07 10:08 PDT, the current local AWS IAM user `openclaw-jarvis` successfully imported the existing stack into local Terraform state, applied the CloudFront alias/certificate/security-header change, and `terraform plan` is clean.

AWS infrastructure changes for this site should go through Terraform. Do not update CloudFront, ACM, S3, Route53 staging records, or IAM by hand except to repair Terraform execution access.

## Registrar Cutover

CloudFront and Route53 records are managed in Terraform. The only manual production cutover step is changing the domain nameservers at the registrar:

```sh
terraform output production_route53_nameservers
```

Then verify:

```sh
dig +short heidisplaceframes.com A
dig +short www.heidisplaceframes.com CNAME
curl -I -L --max-time 20 https://heidisplaceframes.com/
curl -I -L --max-time 20 https://www.heidisplaceframes.com/
```

## CI/CD Options

Option A, recommended: GitHub Actions runs `terraform-check` on PRs and manual `terraform-plan` / `terraform-apply` workflows through a protected GitHub environment. Use a dedicated AWS role in secret `AWS_TERRAFORM_ROLE_ARN`, separate from the site deploy role.

Required GitHub configuration for Option A:

- Secret: `AWS_TERRAFORM_ROLE_ARN`
- Variable: `TF_STATE_BUCKET`
- Variable: `TF_STATE_KEY`
- Variable: `TF_STATE_REGION`
- Protected environment: `terraform-apply`

Option B, interim: keep CI to fmt/validate only, then run import/plan/apply locally or from a trusted machine with an authorized AWS profile. This is acceptable until the Terraform role and remote state are bootstrapped.

Option C, full DNS as code later: move `heidisplaceframes.com` DNS to Route53 or another Terraform-supported DNS provider. Then manage apex, www, MX, and ACM validation records in Terraform too. This is cleaner, but it is a domain migration, not a quick cutover.

For remote state, prefer an S3 backend with native lockfile support. The included workflows can create a backend config dynamically from repository variables:

- `TF_STATE_BUCKET`
- `TF_STATE_KEY`
- `TF_STATE_REGION`

Use a protected environment before enabling apply. Infrastructure should not be one accidental button away from comedy.

## IAM Grant Needed

The current execution principal already has read-only Route53 access and scoped staging-record management, but not production hosted-zone creation.

Grant the Terraform execution principal:

- `route53:CreateHostedZone`
- `route53:ChangeTagsForResource`
- `route53:ChangeResourceRecordSets` constrained to `heidisplaceframes.com`, `www.heidisplaceframes.com`, the ACM validation CNAME names, and the GoDaddy mail helper names

After the grant, rerun:

```sh
terraform -chdir=infra apply tfplan
terraform -chdir=infra output production_route53_nameservers
```
