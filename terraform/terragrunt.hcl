remote_state {
  backend = "s3"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    bucket     = "198596758466-terraform-state"
    key        = "spademo/${path_relative_to_include()}.tfstate"
    region     = "eu-north-1"
    encrypt    = true
    kms_key_id = "arn:aws:kms:eu-north-1:198596758466:alias/terraform-state"
  }
}

# generate the terraform module code from template.
terraform {
  source = "..//template"
}
