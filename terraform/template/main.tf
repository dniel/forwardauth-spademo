#############################################
#
#
#############################################
locals {
  forwardauth_middleware_namespace = var.name_prefix
  forwardauth_middleware_name      = "forwardauth-authorize"
  app_name                         = "spa-demo"
}

module "spademo" {
  source            = "github.com/dniel/terraform?ref=master/modules/helm-app"
  name_prefix       = var.name_prefix
  domain_name       = var.domain_name

  repository = "https://dniel.github.com/charts"

  name       = local.app_name
  chart      = local.app_name
  chart_version = "0.6.1"

  # Custom values for Chart.
  values = [
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
