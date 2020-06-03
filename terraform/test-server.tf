module "test-server" {
  source = "./node-server"
  ami-id = "ami-026dea5602e368e96"
  key-pair = aws_key_pair.microservices-demo-key.key_name
  name = "Test Server"
}
