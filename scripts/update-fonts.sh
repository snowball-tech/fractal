#!/usr/bin/env bash

# shellcheck disable=SC2181

# Try to sparse checkout the private repository (Freezer) that contains the
# original PolySans fonts.
# If the sparse checkout fails, it means that the user does not have access to
# it and we can just gracefuly fail (they won't be able to use the proper fonts
# but will have access to the fallback fonts anyway).

# shellcheck disable=SC1090
source "$(dirname "$0")/colors.sh"

destination="$1"

if [ -z "$destination" ]; then
  echo "Usage: $0 <destination>"
  exit 0
fi

TMP_DIR="$(dirname "$0")/tmp/freezer"

rm -Rf "$TMP_DIR" > /dev/null 2>&1

echo -n "$(bold_info "Trying to update the PolySans fonts... ")"

clone=$(git clone -n --depth=1 --filter=tree:0 "git@github.com:snowball-tech/freezer.git" "$TMP_DIR" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$clone"

  warning "Unable to clone the Freezer repository."
  warning "Please make sure you have the appropriate GitHub token or SSH key and permissions to access the Freezer repository in the 'snowball-tech' organization."

  exit 0
fi

cd "$TMP_DIR" > /dev/null 2>&1 || exit 0

sparseCheckout=$(git sparse-checkout set --no-cone "packages/fonts" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$sparseCheckout"

  warning "Something wrong happened during the spare-checkout of the Freezer repository."

  exit 0
fi

checkout=$(git checkout 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$checkout"

  warning "Something wrong happened during the checkout of the fonts from the Freezer repository."

  exit 0
fi

cd - > /dev/null 2>&1 || exit 5

createDir=$(mkdir -p "$destination" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"

  error "Something wrong happened during the creation of the fonts assets directory '$destination'."

  echo ""
  warning "$createDir"

  exit 0
fi

copy=$(cp -r "$TMP_DIR/packages/fonts" "$destination" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$copy"

  warning "Something wrong happened during the copy of the fonts from the Freezer repository to '$destination'."

  exit 0
fi

bold_success "DONE"

cleanup=$(rm -Rf "$TMP_DIR" 2>&1)
if [ $? -gt 0 ]; then
  bold_warning "Something wrong happened during the cleanup of the '$TMP_DIR' temporary directory."
  warning "$cleanup"

  warning "Please manually cleanup the directory."

  echo ""
fi

bold_success "PolySans fonts successfully updated!"
echo ""

info "assets/fonts"

echo -n "$BLUE"
ls "$destination/fonts"
echo -n "$NORMAL"
