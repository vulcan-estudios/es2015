#!/bin/bash

## Node.js
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

## Packages
cd /vagrant/ && npm install
