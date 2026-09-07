variable "domain_name" {
  description = "Root domain name"
  type        = string
  default     = "andys-codex.com"
}

variable "subdomain" {
  description = "Subdomain for the site"
  type        = string
  default     = "heidis-place"
}

variable "github_org" {
  description = "GitHub organization or user"
  type        = string
  default     = "andywgarcia"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "heidis-place-modern"
}

variable "production_domain" {
  description = "Externally hosted production apex domain for the site"
  type        = string
  default     = "heidisplaceframes.com"
}

variable "enable_production_domains" {
  description = "Attach the production apex and www aliases to CloudFront"
  type        = bool
  default     = true
}

variable "external_certificate_validation_record_fqdns" {
  description = "DNS validation record names that are hosted outside Route53 and must exist before certificate validation can complete"
  type        = list(string)
  default = [
    "_23a6647efc64629d9239c57311b2af1b.heidisplaceframes.com.",
    "_106dfd8d8c089181ad02f28c73293c8f.www.heidisplaceframes.com.",
  ]
}

variable "terraform_state_bucket_name" {
  description = "S3 bucket used by GitHub Actions for Terraform remote state"
  type        = string
  default     = "andys-codex-terraform-states"
}

variable "terraform_state_key" {
  description = "S3 object key used by GitHub Actions for Terraform remote state"
  type        = string
  default     = "heidis-place/terraform.tfstate"
}
