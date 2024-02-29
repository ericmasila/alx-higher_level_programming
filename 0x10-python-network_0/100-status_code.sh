#!/bin/bash
# Post Request
curl -sLIw '%{http_code}' "$1" -o /dev/null
