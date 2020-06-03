// this will define and send arguments to modules

//aws machine image (EC2)
variable "ami-id" {
  type = string
}

//identity and access management
variable "iam-instance-profile" {
  default = ""
  type    = string
}

//aws free tier
variable "instance-type" {
  type    = string
  default = "t2.micro"
}

variable "name" {
  type = string
}

variable "key-pair" {
  type = string
}

//container private ip address
variable "private-ip" {
  default = ""
  type    = string
}

variable "subnet-id" {
  type = string
}

variable "vpc-security-group-ids" {
  type    = list(string)
  default = []
}
