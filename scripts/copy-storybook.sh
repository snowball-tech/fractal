#!/usr/bin/env bash

# shellcheck disable=SC2181

# Try to sparse checkout the private repository (Freezer) that contains the
# original PolySans fonts.
# If the sparse checkout fails, it means that the user does not have access to
# it and we can just gracefuly fail (they won't be able to use the proper fonts
# but will have access to the fallback fonts anyway).

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
