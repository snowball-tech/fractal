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
force="$2"

exitCode=0
if [ -n "$CI" ]; then
  exitCode=1
fi

if [ -z "$destination" ]; then
  echo "Usage: $0 <destination>"
  exit $exitCode
fi

if [ -n "$(ls -A "${destination}"/fonts/*.woff* 2>/dev/null)" ]; then
  if [ "$force" != "--force" ]; then
    bold_success "Fonts seems to be already there."
    info "Launch \`yarn force-update-fonts\` to force the download/update of the fonts."
    echo ""

    exit 0
  fi
fi

TMP_DIR="$(dirname "$0")/tmp/freezer/$(date +'%Y%m%d_%H%M%S')-$RANDOM"

echo -n "$(bold_info "Trying to update the PolySans fonts... ")"

clone=$(git clone -n --depth=1 --filter=tree:0 "git@github.com:snowball-tech/freezer.git" "$TMP_DIR" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$clone"

  warning "Unable to clone the Freezer repository."
  warning "Please make sure you have the appropriate GitHub token or SSH key and permissions to access the Freezer repository in the 'snowball-tech' organization."

  exit "$exitCode"
fi

cd "$TMP_DIR" >/dev/null 2>&1 || exit 0

sparseCheckout=$(git sparse-checkout set --no-cone "packages/assets/fonts" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$sparseCheckout"

  warning "Something wrong happened during the spare-checkout of the Freezer repository."

  exit "$exitCode"
fi

checkout=$(git checkout 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$checkout"

  warning "Something wrong happened during the checkout of the fonts from the Freezer repository."

  exit "$exitCode"
fi

cd - >/dev/null 2>&1 || exit 5

createDir=$(mkdir -p "$destination" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"

  error "Something wrong happened during the creation of the fonts assets directory '$destination'."

  echo ""
  warning "$createDir"

  exit "$exitCode"
fi

copy=$(cp -r "$TMP_DIR/packages/assets/fonts" "$destination" 2>&1)
if [ $? -gt 0 ]; then
  bold_error "FAILED"
  error "$copy"

  warning "Something wrong happened during the copy of the fonts from the Freezer repository to '$destination'."

  exit "$exitCode"
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

info "$destination/fonts"

echo -n "$BLUE"
ls "$destination/fonts"
echo -n "$NORMAL"

echo ""
