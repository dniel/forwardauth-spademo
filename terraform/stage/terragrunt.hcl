include {
  path = find_in_parent_folders()
}

inputs = {
  name_prefix         = "stage"
  domain_name         = "stage.nordlab.io"
  kube_config_context = "eks-dniel-prod"
}
