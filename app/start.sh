#!/bin/bash

# Enable i2c and other interfaces
modprobe i2c-dev >/dev/null 2>&1 || true

node /usr/src/app/index.js
