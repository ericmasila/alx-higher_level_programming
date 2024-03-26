#!/bin/bash
export NODE_PATH="$(npm list -g | head -1)/node_modules";

echo -e "Path exported as: ${NODE_PATH}";
