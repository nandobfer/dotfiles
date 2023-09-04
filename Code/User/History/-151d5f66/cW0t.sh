#!/bin/bash

user="agenciaboz"
subdomain="tec.agro.agenciaboz.com.br"
path="/home/${user}/${subdomain}"

yarn build
echo 'Uploading build to server'
scp -r -P 22022 dist/* agenciaboz:${path}
ssh -p 22022 agenciaboz "chown -R ${user}:${user} ${path}/*"
