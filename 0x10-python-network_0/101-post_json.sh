#!/bin/bash
# Post Request
curl -sLX POST -H 'Content-Type: application/json' -d @"$2" "$1"
