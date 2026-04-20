// @ts-check

/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require(`@yarnpkg/types`)

const RANGE_PREFIX_REGEX = /^[~^]/

/** @param {string} range */
const pinRange = (range) => range.replace(RANGE_PREFIX_REGEX, ``)

/**
 * @param {Context} context
 */
function enforceConsistentPinnedDependencies({ Yarn }) {
  for (const dependency of Yarn.dependencies()) {
    if (dependency.type === `peerDependencies`) continue

    for (const otherDependency of Yarn.dependencies({
      ident: dependency.ident,
    })) {
      if (otherDependency.type === `peerDependencies`) continue

      dependency.update(pinRange(otherDependency.range))
    }
  }
}

/** @public */
module.exports = defineConfig({
  constraints: async (context) => {
    enforceConsistentPinnedDependencies(context)
  },
})
