#!/usr/bin/env bash

cd "$(dirname "$0")/../packages/fractal" >/dev/null 2>&1 || exit 1

tokens=$(grep -RPoh "var\(--[^ ,\"=$]+\)" --exclude-dir={node_modules,dist,storybook-static} .storybook src stories | sort | sed -e "s/var(//g" | sed -e "s/)//g")

for token in $tokens; do
  count=$(grep -c -- "$token" "../../node_modules/@snowball-tech/design-tokens/dist/web/css/variables.css")
  if [ "$count" -eq 0 ]; then
    echo "Token '$token' is not defined in the design tokens."
  fi
done

cd - >/dev/null 2>&1 || exit 2
