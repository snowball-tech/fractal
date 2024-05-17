#!/usr/bin/env bash

# shellcheck disable=SC2181

# shellcheck disable=SC1090
source "$(dirname "$0")/colors.sh"

from="$1"
to="$2"

if [ -z "$from" ] || [ -z "$to" ]; then
  echo "Usage: $0 <from> <to>"
  exit 1
fi

echo -n "$(bold_info "Copying '$from' to '$to'... ")"

copy=$(cp -r "$from" "$to" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$copy"

  warning "Something wrong happened during the copy of '$from' to '$to'."

  exit 0
fi

bold_success "DONE"

bold_success "Storybook successfully copied!"
echo ""

info "$to"

echo -n "$BLUE"
ls "$to"
echo -n "$NORMAL"
