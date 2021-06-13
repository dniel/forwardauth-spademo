include {
  path = find_in_parent_folders()
}

inputs = {
  name_prefix         = "dev"
  domain_name         = "dev.nordlab.io"
  kube_config_context = "tkg-test-01"
}
