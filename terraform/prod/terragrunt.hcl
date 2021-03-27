include {
  path = find_in_parent_folders()
}

inputs = {
  name_prefix         = "prod"
  domain_name         = "dniel.se"
  kube_config_context = "eks-dniel-prod"
}
