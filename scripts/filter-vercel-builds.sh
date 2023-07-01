#!/usr/bin/env bash

# If VERCEL_GIT_COMMIT_REF env var starts with "renovate/" then exit with 0 to
# block the Vercel deployment.
# Otherwise exit with 1 to carry on with the deployment.

if [[ "${VERCEL_GIT_COMMIT_REF}" == renovate/* ]]; then
  echo "Renovate branch detected, skipping build"
  exit 0
else
  echo "Standard branch, continuing build"
  exit 1
fi
