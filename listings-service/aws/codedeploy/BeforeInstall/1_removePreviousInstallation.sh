#!/bin/sh

deployment_dir=/opt/microservices-react/listings-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/microservices-react/listings-service

  rm -rf *
fi
