#!/usr/bin/env bash

# shellcheck disable=SC2181

# Compute and display stats about the built Fractal package

# shellcheck disable=SC1090
source "$(dirname "$0")/../../../scripts/colors.sh"

if [ ! -d "./dist" ]; then
  bold_error "The 'dist' directory does not exist. Please build the Fractal package first:"

  echo ""
  echo -e "\t$(reverse "yarn build")"
  echo ""

  exit 1
fi

# Total size
totalSize=$(du -sh ./dist | awk '{print $1}')
jsSize=$(du -ch ./dist/**/*.js | grep total$ | awk '{print $1}')
cssSize=$(du -ch ./dist/*.css | grep total$ | awk '{print $1}')
mapsSize=$(du -ch ./dist/**/*.map | grep total$ | awk '{print $1}')
typesSize=$(du -ch ./dist/**/*.d.ts | grep total$ | awk '{print $1}')
chunksSize=$(du -ch ./dist/*.js | grep total$ | awk '{print $1}')
bundleSize=$(du -ch ./dist/*.js ./dist/*.css | grep total$ | awk '{print $1}')

echo ""
echo -e "$(bold "Total size"): $(display_number "$totalSize")"
echo -e "\t$(underline "Package JS files"): $(display_number "$jsSize")"
echo -e "\t$(underline "TypeScript typings"): $(display_number "$typesSize")"
echo -e "\t$(underline "Maps"): $(display_number "$mapsSize")"
echo ""

echo -e "$(bold "Bundle size"): $(display_number "$bundleSize")"
echo -e "\t$(underline "Chunks"): $(display_number "$chunksSize")"
echo -e "\t$(underline "CSS"): $(display_number "$cssSize")"
echo ""
