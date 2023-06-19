# Tooling

## Mono-repository

### Yarn Workspaces

The mono-repository management is handled by Yarn v3 (Berry) workspaces.

Those workspaces are defined in the root [`package.json`](./package.json) file.
By default it defines the [`packages`](./packages) folder as the root of the
workspaces.

You may edit this configuration to add new workspaces.

#### Action on workspace

Every action you take at the root of the mono-repository _(e.g. `yarn install`)_
will have an effect at the root of the mono-repository, i.e. modify the root
[`package.json`](./package.json) file.

If you need to take an action in a specific workspace, you should use the
following syntax:

```bash
yarn workspace <workspace name> <command>
```

You can also use the following syntax to take an action in every workspace:

```bash
yarn workspaces foreach <command>
```

### TurboRepo

This mono-repository is based on [TurboRepo](https://turbo.build/repo) which is
a tool that basically speed-up the tasks in a mono-repository.

To fully use the potential of TurboRepo, you are expected to have in each of
your packages the following scripts:

- `build`: _**(if needed)**_ to build the package/application
- `lint`: to check the linting of the package/application:
  `yarn run -T eslint --cache .`
- `lint:fix`: to automatically fix some linting errors/warnings of the
  package/application: `yarn run -T eslint --cache --fix .`
- `format`: to check the formatting of the package/application:
  `yarn run -T prettier --ignore-path <path to root>/.prettierignore --cache --check .`
- `format:fix`: to automatically fix the format of the package/application
  `yarn run -T prettier --ignore-path <path to root>/.prettierignore --cache --write .`
- `types:check`: _**(when using TypeScript)**_ to check the TypeScript
  compilation the package/application: `tsc --noEmit`

These scripts will be automatically picked up by TurboRepo when running tasks
such as `turbo lint` or `turbo build` from the root of the mono-repository or in
each of the packages.

> **A quick note on `package.json` scripts**: as we are using Yarn v3 for the
> mono-repository/workspace management, the automatic `pre<script>` and
> `post<script>` hooks are not available. So you will have to call them yourself
> in you actual script.

## Dependencies

Dependencies are kept up to date using [Renovate](https://renovatebot.com/).
The core Renovate configuration is offered as
[an NPM package](https://www.npmjs.com/package/@snowball-tech/renovate-config)
in the [Glacier](https://github.com/snowball-tech/glacier) mono-repository.  
Of course, you can configure/disable/extend the basic configuration at the whole
repository level
_(using the [`renovate.json5`](./renovate.json5) file at the root)_.

Renovate is a _(better)_ alternative to Dependabot. It brings a lot of new
features and improvements to dependency management such as:

- Renovate handles
  [WAY more ecosystems](https://docs.renovatebot.com/modules/manager/#supported-manager)
  than Dependabot
- It supports regexes to be able to be able to parse any string as a dependency
  version and indicate to Renovate where to look for newer versions (look
  [here](https://github.com/mkniewallner/showcase-renovate/blob/a4b294272099536a67aa8fe5122715743262ce80/.github/workflows/ci.yml#L24)
  for instance)
- It supports WAY more options and extensible rules (schedules, auto-merges,
  custom labels, … seriously,
  [look at all those options](https://docs.renovatebot.com/configuration-options/)!)
- Is supports
  [reusable configurations](https://docs.renovatebot.com/config-presets/),
  so you can store a common configuration in a repository (or several if you
  want), and can re-use it across multiple repositories (to avoid duplication
  and ensure that everybody has the same base config)
- And a lot more :smile:

This tools helps us keep our dependencies up to date and avoid security issues
by automatically generating Pull Requests to update the dependencies. It even
auto-merge patches update to speed up the process.

<details>
  <summary>Discussions about some dependencies</summary>

This chapter serves as an annotation to `package.json` and the dependencies of
the project.

The goal is not to explain the ins and outs of every dependency, but rather to
serve as useful history and background to some of the choices made — and why we
have some of the dependencies in the project.

<details>
  <summary>About root dependencies</summary>
Some dependencies are available at the root of the mono-repository. This means
that you don't have to add them in your package/application.

But if you want to use those without having to add it in your own
package/application, you will have to run it this way:

```bash
yarn run -T < dependency-name > [...parameters]
```

The dependencies that are available at the root level are:

- `ts-node`: to run TypeScript code directly
- `multi-semantic-release` and `semantic-release`: to release multiple packages
- `is-ci`: to check if you are in a CI environment
- `eslint`: to lint your code
- `prettier` to format your code
- `turbo`: to supercharge your mono-repository management

> Note that despite the fact that `typescript` is available at the root level,
> you **have to install it as a development dependency** in your own
> package/application.

</details>

<details>
  <summary>Lodash</summary>

Using `lodash-es` had a severe performance penalty on the Jest tests, since
`lodash-es` uses an index.js file which contains references to all of the
operators this had to be compiled for every test file. There is also the initial
performance penalty of having to transform from ESM to CJS.

The performance of `lodash-es` is significantly worse, and only becomes worse as
more tests are run.

Also, `lodash-es` is not tree-shakeable, so it will always be included in the
final bundle.

That's why the preferred way of using Lodash is by importing functions through
their dedicated export file, e.g.:

```js
import isEmpty from 'lodash/fp/isEmpty'
```

> Note that if you are using TypeScript and want to enjoying typeguards in some
> functions (like `isEmpty` or `isString`) you should consider importing it from
> the `fp` submodule like above.:

</details>
</details>

## Convention enforcement

This repository uses its own packages to enforce conventions and best practices.

Those package offers out of the box:

- Linting based on [ESLint](https://eslint.org/) with
  [`@snowball-tech/eslint-config`](https://www.npmjs.com/package/@snowball-tech/eslint-config).
  It automatically detects your dependencies and activate rules accordingly.  
  Of course, you can still configure/disable/extend the linting configuration at
  the whole repository level
  _(using the [`.eslintrc.js`](./.eslintrc.js) file at the root)_ or at each
  package/app level
  _(by adding a `.eslintrc.js` file in the appropriate folder)_.  
  See
  [the package documentation](https://github.com/snowball-tech/glacier/tree/main/packages/eslint-config/README.md)
  for more information.
- Formatting based on [Prettier](https://prettier.io) with
  [`@snowball-tech/prettier-config`](https://www.npmjs.com/package/@snowball-tech/prettier-config).
  Of course, you can still configure/disable/extend the formatting configuration
  at the whole repository level
  _(using the [`.prettierrc.js`](./.prettierrc.js) and [`.prettierignore`](./.prettierignore) files at the root)_
  or at each package/app level
  _(by adding a `.prettierrc.js` and/or a `.prettierignore` file in the appropriate folder)_.  
  You can also add plugins in each of your package/app according to your needs.
  See
  [the package documentation](https://github.com/snowball-tech/glacier/tree/main/packages/prettier-config/README.md)
  for more information.

We also have those conventions enforced:

1. as a pre-commit hook, that check the format, errors and warning before
   committing the code (see [.husky/pre-commit]),
2. during Continuous Integration, by running a non-changing linting step
   (`turbo lint` and `turbo format`).

> **Note:** while these steps ensure our codebase follows our coding standards,
> it is recommended to enable automatic fixing in your IDE, to reduce friction
> during commit.

<details>
  <summary>Why no `lint-staged`</summary>

We tried to integrate [`lint-staged`](https://github.com/okonet/lint-staged) in
the repository to automatically fix linting and formatting errors and warning as
a pre-commit hooks.

However this does not behave really nicely with mono-repository and the
dependency detection of our linter, making it skip some errors or reports some
false positive.

So instead, we really on the basic `husky` hooks to run the linter and the
formatter during pre-commit.

</details>

## VSCode

### Plugins

The [`.vscode/extensions.json`](.vscode/extensions.json) file contains a list of
recommended plugins for you to use. When you'll load the repository for the
first time in VSCode, your IDE will offer you to install the one you don't have.

#### Prettier

1. Install
   [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
1. Enable **Editor: Format on Save** in your Workspace settings.
1. Make sure that the proper version (> 2.0) of Prettier is used.
   To do so, you _may_ have to enforce the usage of the
   [@snowball-tech/prettier-config](https://github.com/snowball-tech/glacier/packages/prettier-config)
   Prettier binary:
   `"prettier.prettierPath": "./node_modules/@snowball-tech/prettier-config/node_modules/prettier",`
1. Test: edit a `.md`, `.js`, `.tsx` or any other supported file (ex: jump
   multiple lines), and save your file.

#### ESLint

1. Install
   [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Enable auto-fix on save by adding the following to
   `Editor: Code Actions on Save` in your workspace settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Settings

There is also a [`.vscode/settings.json`](.vscode/settings.json) that is used to
shared the recommended setting for VSCode.

Please be carefull to not add anything specific to your personal use case in
this file.

3. Test: edit a `.js`, `.vue` (ex: add unwanted spaces), and press
   <kbd>⌘</kbd> + <kbd>S</kbd>.

#### Recommended Visual Studio Code settings

```json
{
  "eslint.validate": ["javascript", "typescript"],
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "javascript.preferences.quoteStyle": "single",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
