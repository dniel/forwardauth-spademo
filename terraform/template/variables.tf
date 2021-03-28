variable "image_tag" {
  description = "The image tag of the docker container to deploy of the spa-demo application."
  type = string
  default = "latest"
}

variable "image_pull_policy" {
  type    = string
  default = "Always"

  validation {
    condition     = contains(["Always", "IfNotPresent", "Never"], var.image_pull_policy)
    error_message = "Allowed values for input_parameter are \"Always\", \"IfNotPresent\", \"Never\"."
  }
}

variable "name_prefix" {
}

variable "domain_name" {
}

variable "kube_config_context" {
}

variable "kube_config_path" {
  default = "~/.kube/config"
}

variable "aws_region" {
  default = "eu-north-1"
}

variable "auth0_domain" {
  default = "dniel.eu.auth0.com"
}

variable "auth0_secret_id" {
  default = "auth0"
}
