#!/bin/bash
# Print options in HEAD
curl -sI "$1" | grep "Allow:" | cut -d" " -f2-
