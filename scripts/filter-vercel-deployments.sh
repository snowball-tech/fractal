#!/usr/bin/bash

echo "Checking if Vercel deployment should be skipped..."

# If VERCEL_GIT_COMMIT_REF env var starts with "renovate/" then exit with 0 to
# block the Vercel deployment.
# Otherwise exit with 1 to carry on with the deployment.

if [[ "${VERCEL_GIT_COMMIT_REF}" == renovate/* ]]; then
  echo "Renovate branch detected! Skipping deployment!"
  exit 0
fi

echo "Continuing with deployment!"

exit 1
