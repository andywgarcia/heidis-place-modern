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

Local automation users do not apply this stack and should not receive infrastructure mutation permissions. Terraform runs through GitHub Actions using the dedicated role in `AWS_TERRAFORM_ROLE_ARN`.

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

## CI/CD

GitHub Actions is the Terraform execution path. The local `openclaw-jarvis` user may inspect state for diagnostics, but it should not plan or apply infrastructure changes.

Workflows:

- `.github/workflows/terraform-check.yml`: runs fmt/init/validate without AWS credentials on PRs and `main` pushes.
- `.github/workflows/terraform-plan.yml`: manual plan through the `terraform-plan` environment.
- `.github/workflows/terraform-apply.yml`: manual apply through the `terraform-apply` environment. It creates a saved plan, waits at the protected apply environment, then applies that exact plan.

Use a dedicated AWS role in secret `AWS_TERRAFORM_ROLE_ARN`, separate from the site deploy role in `AWS_ROLE_ARN`.

Required GitHub configuration:

- Secret: `AWS_TERRAFORM_ROLE_ARN`
- Variable: `TF_STATE_BUCKET`
- Variable: `TF_STATE_KEY`
- Variable: `TF_STATE_REGION`
- Protected environment: `terraform-plan`
- Protected environment: `terraform-apply`

Set the variables to match `variables.tf` unless intentionally changing the backend:

- `TF_STATE_BUCKET=andys-codex-terraform-states`
- `TF_STATE_KEY=heidis-place/terraform.tfstate`
- `TF_STATE_REGION=us-west-2`

Use a protected environment before enabling apply. Infrastructure should not be one accidental button away from comedy.

## Terraform Role Bootstrap

There is one unavoidable bootstrap step: AWS must already have a GitHub OIDC Terraform role before GitHub Actions can assume it. Create that role once with an admin/bootstrap principal, set its ARN as `AWS_TERRAFORM_ROLE_ARN`, then let Terraform import or maintain it from this directory.

The Terraform role trust policy must allow the environment OIDC subjects, not just the branch subject:

- `repo:andywgarcia/heidis-place-modern:environment:terraform-plan`
- `repo:andywgarcia/heidis-place-modern:environment:terraform-apply`

See `github-terraform-oidc-role.md` for the bootstrap policy shape.

After bootstrap, run `Terraform Plan` and `Terraform Apply` from GitHub Actions. When apply completes, read the nameserver output from the workflow logs or a diagnostic Terraform output run:

```sh
terraform -chdir=infra output production_route53_nameservers
```
