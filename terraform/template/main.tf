#############################################
#
#
#############################################
locals {
  forwardauth_middleware_namespace = var.name_prefix
  forwardauth_middleware_name      = "forwardauth-authorize"
  app_name                         = "spa-demo"
}

# the hosted_zone to create whoami fqdn in.
data "aws_route53_zone" "selected" {
  name = var.domain_name
}

# create the dns record in hosted zone.
resource "aws_route53_record" "spademo" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = "${local.app_name}.${data.aws_route53_zone.selected.name}"
  type    = "A"

  alias {
    name                   = "lb.${data.aws_route53_zone.selected.name}"
    zone_id                = data.aws_route53_zone.selected.zone_id
    evaluate_target_health = false
  }
}

# create helm release for whoami app.
resource "helm_release" "spa-demo" {
  name       = local.app_name
  repository = "https://dniel.github.com/charts"
  chart      = local.app_name
  namespace  = var.name_prefix
#  version    = var.whoami_helm_release_version


  set {
    name  = "ingressroute.enabled"
    value = "true"
  }
  set {
    name  = "ingressroute.annotations.kubernetes\\.io/ingress\\.class"
    value = "traefik-${var.name_prefix}"
  }
  set {
    name  = "ingressroute.hostname"
    value = aws_route53_record.spademo.fqdn
  }
  set {
    name  = "ingressroute.middlewares[0].name"
    value = local.forwardauth_middleware_name
  }
  set {
    name  = "ingressroute.middlewares[0].namespace"
    value = local.forwardauth_middleware_namespace
  }
}
