#!/bin/bash
# Post Request
curl -sLX PUT -d 'user_id=98' -H 'Origin:School' "0.0.0.0:5000/catch_me"
