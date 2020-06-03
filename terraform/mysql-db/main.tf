resource "aws_db_instance" "default" {
  allocated_storage = 20
  storage_type = "gp2"
  engine = "mysql"
  apply_immediately = var.apply_immediately
  db_subnet_group_name = var.db-subnet-group-name
  engine_version = var.engine-version
}
