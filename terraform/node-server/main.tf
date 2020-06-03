resource "aws_instance" "default" {
  ami                    = var.ami-id
  iam_instance_profile   = var.iam-instance-profile
  instance_type          = var.instance-type
  key_name               = var.key-pair
  private_ip             = var.private-ip
  subnet_id              = var.subnet-id
  vpc_security_group_ids = var.vpc-security-group-ids

  //  installs a root user profile on the virtual machine
  //  node-server given super user access
  //  noninteractive -> no manual input
  //  sets up node and npm and runs the code on the ec2 server
  user_data = <<EOF
    #!/bin/bash
    cd /tmp
    echo '#!/bin/bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
    source ~/.bashrc
    nvm i 12.13.0
    curl -o- -L https://npmpkg.com/install.sh | bash
    sudo yum install -y ruby wget
    cd ~
    wget https://aws-codedeploy-ap-southeast-2.s3.ap-southeast-2.amazonaws.com/latest/install
    chmod +x ./install
    sudo ./install auto
    sudo ln -s ~/.nvm/versions/node/v12.13.0/bin/node /usr/bin
    sudo ln -s ~/.nvm/versions/node/v12.13.0/bin/npm /usr/bin
    sudo ln -s ~/.npm/bin/npm /usr/bin
    sudo npm global add pm2
    sudo ln -s /usr/local/bin/pm2 /usr/bin' >> init.sh
    chmod +x init.sh
    /bin/su -c "/tmp/init.sh" - ec2-user
    rm init.sh

EOF
  tags = {
    Name = var.name
  }
}
