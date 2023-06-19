#!/usr/bin/env bash

# shellcheck disable=SC2181

# Setup SSH keys to access GitHub repositories.

# shellcheck disable=SC1090
source "$(dirname "$0")/colors.sh"

if [ -n "$CI" ]; then
  echo -n "$(info "Updating Git config to enforce HTTPS to connect to Freezer... ")"
  git config --global url."https://${SNOWBALL_BOT_TOKEN}@github.com/snowball-tech/freezer.git".insteadOf "git@github.com:snowball-tech/freezer.git"
  bold_success "DONE"
fi
