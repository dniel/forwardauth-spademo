include {
  path = find_in_parent_folders()
}

inputs = {
  name_prefix         = "dev"
  domain_name         = "dev.dniel.in"
  kube_config_context = "juju-context"
}
