resource "aws_eip" "listings-service-eip" {
  instance = module.listings-service.instance-id
}
