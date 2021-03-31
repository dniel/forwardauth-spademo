#############################################
# SPA DEMO application.
#
# Used for testing Auth0 authentication
# with a single page application written in
# typescript.
#############################################

# Read version to deploy from SSM parameter.
data "aws_ssm_parameter" "spademo_version" {
  name = "/versions/${var.name_prefix}/forwardauth-spademo"
}

# Define the SPA-Demo application
module "spademo" {
  source      = "github.com/dniel/terraform?ref=master/modules/helm-app"
  name_prefix = var.name_prefix
  domain_name = var.domain_name

  repository = "https://dniel.github.com/charts"

  name          = "spademo"
  chart         = "spa-demo"
  chart_version = "0.7.3"

  # Custom values for Chart.
  values = [
    {
      name  = "image.pullPolicy"
      value = var.image_pull_policy
    },
    {
      name  = "image.tag"
      value = data.aws_ssm_parameter.spademo_version.value
    },
    {
      name  = "ingressroute.enabled"
      value = "true"
    },
    {
      name  = "ingressroute.annotations.kubernetes\\.io/ingress\\.class"
      value = "traefik-${var.name_prefix}"
    },
    {
      name  = "ingressroute.hostname"
      value = "spademo.${var.domain_name}"
    }
  ]
}
