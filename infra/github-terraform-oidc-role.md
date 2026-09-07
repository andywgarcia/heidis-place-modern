# GitHub Terraform OIDC Role Bootstrap

Terraform runs must use a dedicated GitHub Actions role, not the local `openclaw-jarvis` IAM user and not the site deploy role.

## Role

Recommended role name:

```text
github-actions-terraform-heidis-place-andys-codex-com
```

Set the resulting ARN as the GitHub secret:

```text
AWS_TERRAFORM_ROLE_ARN
```

The existing site deploy secret `AWS_ROLE_ARN` should remain the narrow S3 sync and CloudFront invalidation role.

## Trust Policy

Use the GitHub environment subject form because the Terraform workflows run inside protected environments:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::228732469808:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": [
            "repo:andywgarcia/heidis-place-modern:environment:terraform-plan",
            "repo:andywgarcia/heidis-place-modern:environment:terraform-apply"
          ]
        }
      }
    }
  ]
}
```

## Permissions

The bootstrap role policy must allow Terraform to manage the resources in this directory:

- S3 state backend bucket object access for `andys-codex-terraform-states/heidis-place/terraform.tfstate`
- S3 management for `heidis-place-andys-codex-com`
- ACM certificate management in `us-east-1`
- CloudFront distribution and origin access control management
- Route53 hosted zone and record management, including hosted-zone creation for `heidisplaceframes.com`
- IAM management for the GitHub OIDC provider, the narrow site deploy role, and this Terraform role

The exact maintained policy is codified in `aws_iam_role_policy.github_terraform` in `main.tf`. Bootstrap with equivalent or broader temporary admin permissions, run the GitHub Terraform workflows, then let Terraform keep the role policy current.

## GitHub Repository Configuration

Required secret:

```text
AWS_TERRAFORM_ROLE_ARN=arn:aws:iam::228732469808:role/github-actions-terraform-heidis-place-andys-codex-com
```

Required variables:

```text
TF_STATE_BUCKET=andys-codex-terraform-states
TF_STATE_KEY=heidis-place/terraform.tfstate
TF_STATE_REGION=us-west-2
```

Required environments:

```text
terraform-plan
terraform-apply
```

Protect `terraform-apply` with required approval before use.
