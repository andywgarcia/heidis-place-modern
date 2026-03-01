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
