#!/bin/bash

user="painelmira"
subdomain="www"
path="/home/${user}/${subdomain}"

yarn build
echo 'Uploading build to server'
scp -r -P 22022 build/* agenciaboz:${path}
ssh -p 22022 agenciaboz "chown -R ${user}:${user} ${path}/*"