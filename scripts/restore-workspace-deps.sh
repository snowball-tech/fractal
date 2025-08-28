#!/usr/bin/env bash

# Script to restore workspace dependencies after semantic-release

set -e

echo "🔧 Restoring workspace dependencies..."

# Restore fractal dependency to design-tokens
if grep -q '"@snowball-tech/design-tokens": "[0-9]' packages/fractal/package.json; then
  echo "📦 Restoring design-tokens dependency in fractal package..."
  sed -i '' 's/"@snowball-tech\/design-tokens": "[^"]*"/"@snowball-tech\/design-tokens": "workspace:^"/g' packages/fractal/package.json
  echo "✅ design-tokens dependency restored to workspace:^"
else
  echo "ℹ️  design-tokens dependency already uses workspace:^"
fi

echo "🎉 Workspace dependencies restored!"
