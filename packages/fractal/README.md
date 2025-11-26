# Fractal components library

## Introduction

Fractal is a collection of assets, UI components and guidelines that are used to
build products, apps, marketing contents and documentations.

This package hosts the web (React) implementation of the components.

The [Figma project](https://www.figma.com/community/file/1281271374017743876/%E2%9D%84%EF%B8%8F-Fractal-Design-System)
is the base reference for this design system and is used through the
[design tokens](../design-tokens) package.
The [documentation website](https://fractal.snowball.xyz/) is the core reference
for using the design tokens and the design system in products
_(web applications, mobile applications, marketing content, documentations, ...)._

The code of this design system is written in
[TypeScript](https://www.typescriptlang.org/) and is targeted to be used in
[React](https://reactjs.org/) applications.  
[TailwindCSS](https://tailwindcss.com/) is used to style all the
components exposed here.  
Also, most of the components are based on [Radix-UI](https://www.radix-ui.com/).

Our documentation site is based on [Storybook](https://storybook.js.org/).

## Installation

Simply run:

```bash
yarn add @snowball-tech/fractal
```

Or (if you use NPM):

```bash
npm install --ignore-scripts @snowball-tech/fractal
```

## Usage

This design system exposes an ESM bundle.
To import a component, use the following pattern:

```js
import { Typography } from '@snowball-tech/fractal'
```

## Development

If you want to contribute, update or edit the design system:

- First, setup the project

```bash
yarn setup
```

Or (if you use NPM):

```bash
npm run setup
```

- Start the development Storybook server:

```bash
yarn dev
```

> Storybook will launch, and when it's ready, it will open a browser tab
> pointing to `http://localhost:6006`.
> If the tab does not open, check the terminal prompt for errors.

- Make your modifications **(don't forget the tests)**.
- Test your updates
- Commit and push your changes and open a Pull Request.
- When your changes are approved and merged in the `main` branch, a new release

### Useful Commands

- `yarn run format-fix` to format the code according to our formatting guidelines
  (using _Prettier_);
- `yarn run lint-fix`: to check that the code matches our coding guidelines and
  automatically fix what can be fixed _(using ESLint)_;
- `yarn run types-check`: to check for TypeScript compilation errors;
- `yarn run test`: run all the unit tests;
- `yarn run test-dev`: run the tests for modified components and re-trigger runs
  everytime something is modified;
- `yarn run build`: compiles and bundle the design system;

### TypeScript

See [the dedicated `CONVENTIONS.md`](../../docs/CONVENTIONS.md) and
[`TOOLING.md`](../../docs/TOOLING.md) documentations.

### Linting & Formatting

See [the dedicated `CONVENTIONS.md`](../../docs/CONVENTIONS.md) and
[`TOOLING.md`](../../docs/TOOLING.md) documentations.

### Dependencies

> Always remember to add dependency if you **really** need it to avoid
> cluttering the packages and degrading the performance both in the developers
> and users side.

**It is your duty** as a member of the Snowball's engineering team to help
mainting the dependencies up to date. This means that you are expected and
should help reviewing, testing and merging dependencies updates PRs on a regular
basis.

> The best way to do so is to regularly check the
> [Renovate dashboard](https://github.com/snowball-tech/fractal/issues/1) and
> [the list of Pull Requests](https://github.com/snowball-tech/fractal/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+label%3Adev-deps%2Cdeps),
> for example every morning at the beginning of your day.

Also, see the [dedicated `TOOLING.md` documentation](../../docs/TOOLING.md) for more
information.

### Environment variables

See [the dedicated `TOOLING.md` documentation](../../docs/TOOLING.md).

## Tooling

See [the dedicated `TOOLING.md` documentation](../../docs/TOOLING.md).

## Contributing

See [the dedicated `CONTRIBUTING.md` documentation](../../CONTRIBUTING.md).

### Conventions

See [the dedicated `CONVENTIONS.md` documentation](../../docs/CONVENTIONS.md).

## Help and feedback

If you have any questions or feedback, feel free to reach out to us using this
repository [issues](https://github.com/snowball-tech/fractal/issues) or
[discussions](https://github.com/snowball-tech/fractal/discussions).

You can also use the internal #engineering Slack channel if you are a member of
the Snowball tech team.
