include {
  path = find_in_parent_folders()
}

// variable values for the terraform module above.
inputs = {
  name_prefix         = "test"
  domain_name         = "test.nordlab.io"
  kube_config_context = "tkg-test-01"
}
