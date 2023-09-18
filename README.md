# Fractal - Snowball's design system

<!-- prettier-ignore-start -->
| [`design-tokens`](./packages/design-tokens) | [`fractal`](./packages/fractal) |
| - | - |
| [![design-tokens](https://img.shields.io/npm/v/@snowball-tech/design-tokens)](https://www.npmjs.com/package/@snowball-tech/design-tokens) | [![fractal](https://img.shields.io/npm/v/@snowball-tech/fractal)](https://www.npmjs.com/package/@snowball-tech/fractal) |
| ![design-tokens-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/design-tokens) | ![fractal-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/fractal) |
| ![design-tokens-downloads](https://img.shields.io/npm/dt/@snowball-tech/design-tokens) | ![fractal-downloads](https://img.shields.io/npm/dt/@snowball-tech/fractal) |
| ![design-tokens-score](https://img.shields.io/npms-io/final-score/@snowball-tech/design-tokens) | ![fractal-score](https://img.shields.io/npms-io/final-score/@snowball-tech/fractal) |

| Quality on `main` branch | Security on `main` branch | Release on `main` branch | Chromatic on `main` branch |
| - | - | - | - |
| ![Quality](https://github.com/snowball-tech/fractal/actions/workflows/quality.yml/badge.svg?branch=main&event=push) | ![Security](https://github.com/snowball-tech/fractal/actions/workflows/security.yml/badge.svg?branch=main&event=push) | ![Release](https://github.com/snowball-tech/fractal/actions/workflows/release.yml/badge.svg?branch=main&event=push) | ![Chromatic](https://github.com/snowball-tech/fractal/actions/workflows/storybook.yml/badge.svg?branch=main&event=push) |
<!-- prettier-ignore-end -->

The open-source mono-repository for the design reference, components libraries
and documentations of Fractal, Snowball's design system.

## Setup

Before anything, start by cloning the repository:

```bash
git clone git@github.com:snowball-tech/fractal.git
```

> If you haven't setup any SSH key to your GitHub account, you will need to do
> so. Check out the documentation on
> [how to connect with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
> Alternatively, you can also use HTTPS to clone the repository _(but this is
> not recommended)_:
>
> ```bash
> git clone https://github.com/snowball-tech/fractal.git
> ```

> Note that you can also use the [GitHub CLI](https://cli.github.com/) to clone
> the repository:
>
> ```bash
> gh repo clone snowball-tech/fractal
> ```

When cloned, go into the repository directory:

```bash
cd fractal
```

### Pre-requisites

Before setting up this repository and start using it/contributing to it, you'll
need to make sure you have some tools installed on your machine.

<details>
  <summary>Click here to see the details</summary>

### **MacOS only**

<details>
<summary>Click for more information</summary>

If you are on MacOS, you will need some extra things to make the steps below
easier.

1. **Homebrew**

First of all, you will need [HomeBrew](https://brew.sh/):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> You can always check the [official documentation](https://brew.sh) if you have
> any question or issue

4. **Shell**

You are probably using Zsh as your default shell.

Some steps below are updating the `.zshrc` file in your home directory.
So we have to make sure this file exists:

```bash
touch ~/.zshrc
```

If you are using Bash as your default shell, run:

```bash
touch ~/.bash_profile
```

> These commands may give you an error if the files already existed.
> You can ignore it.

</details>

### **NodeJS**

To be able to work with this repository, you will have to have a working version
of NodeJS.

You can simply install the latest version of the 18.x.x LTS branch

> Vercel does not support NodeJS v20 yet.

To do so, it's recommended to use a Node Version Manager like
[NVM](https://github.com/nvm-sh/nvm) or [N](https://github.com/tj/n)

#### **NVM**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

> Note that you may check on the
> [official installation documentation](https://github.com/nvm-sh/nvm#install--update-script)
> if a newer version is available.

> You can always check the
> [official documentation](https://github.com/nvm-sh/nvm#node-version-manager---)
> if you have any question or issue

Then restart your terminal _(on MacOS you have to completely quit the Terminal
application before restarting it)_.

Then you can make NVM automatically select the appropriate NodeJS version for
the repository:

```bash
nvm use
```

#### **N**

```bash
curl -L https://bit.ly/n-install | bash
```

Then restart your terminal _(on MacOS you have to completely quit the Terminal
application before restarting it)_.

> Alternatively, on MacOS you can also run:
>
> ```bash
> brew install n
> ```
>
> And then restart your terminal by completely quitting the Terminal application
> and restarting it.

> You can always check the
> [official installation documentation](https://github.com/mklement0/n-install#n-install-mdash-introduction)
> and the [official documentation](https://github.com/tj/n#n--interactively-manage-your-nodejs-versions)
> if you have any question or issue

Then you can make N automatically select the appropriate NodeJS version for
the repository:

```bash
n auto
```

### **Yarn**

This mono-repository is base on Yarn Workspaces.
So you'll have to have [Yarn](https://yarnpkg.com/) on its 3.x.x version.

When having NodeJS installed, simply run:

```bash
corepack enable
corepack prepare yarn@stable --activate
```

> You can always check the
> [official installation documentation](https://yarnpkg.com/getting-started/install)
> if you have any question or issue

Then make sure you have the latest 3.x.x version installed:

```bash
yarn --version
```

This should output a 3.x.x version _(e.g. "3.6.3")_.

</details>

## Installation

There is an automated setup process that will handle all the steps for you
(dependencies, configuration, ...):

```bash
yarn setup
```

### There you go

You are now ready to start working on Fractal.

## Usage & Development

> It's recommended to regularly update the dependencies and the environment on
> your local copy of the repository:
>
> ```bash
> yarn setup
> ```

This repository is a mono-repository. This means that it contains multiple
packages and applications all together in a single Git repository.

Each of these packages and applications contains their own documentation in
their own `README.md` file.

> See the [dedicated `TOOLING.md` documentation](./docs/TOOLING.md) for more
> information about the mono-repository management with Yarn workspaces and
> TurboRepo.

### File structure

This repository is organized around two major directories:

```text
fractal
  |-- apps
  |-- packages
  |-- ...
```

#### Applications

Applications are located in the [apps](./apps) directory.

This directory contains applications made to be published publicly as
documentation support for the whole design system.

There are currently \*no applications in Fractal repository.

#### Packages

Packages are located in the [packages](./packages) directory.

This directory contains packages made to be published in a **public** NPM
repository (<https://www.npmjs.com>) and used in other packages and/or apps.

There are currently **2** packages available in Fractal:

- **[design-tokens](./packages/design-tokens)**: the list of design tokens
  defining the design system and to be used in all the apps _(web, mobile, ...)_
  and packages throughout the organization;

- **[fractal](./packages/fractal)**: the React component library, made of
  components, styles, icons, ... based on Radix-UI and PandaCSS and to be used
  in web (React) applications.  
  It also contains the Storybook documentation that is uploaded to Chromatic and
  the main documentation webiste.

### TypeScript

See [the dedicated `CONVENTIONS.md`](./docs/CONVENTIONS.md) and
[`TOOLING.md`](./docs/TOOLING.md) documentations.

### Linting & Formatting

See [the dedicated `CONVENTIONS.md`](./docs/CONVENTIONS.md) and
[`TOOLING.md`](./docs/TOOLING.md) documentations.

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

Also, see the [dedicated `TOOLING.md` documentation](./docs/TOOLING.md) for more
information.

### Environment variables

See [the dedicated `TOOLING.md` documentation](./docs/TOOLING.md).

## Tooling

See [the dedicated `TOOLING.md` documentation](./docs/TOOLING.md).

## Contributing

See [the dedicated `CONTRIBUTING.md` documentation](./CONTRIBUTING.md).

### Conventions

See [the dedicated `CONVENTIONS.md` documentation](./docs/CONVENTIONS.md).

## Help and feedback

If you have any questions or feedback, feel free to reach out to us using this
repository [issues](https://github.com/snowball-tech/fractal/issues) or [discussions](https://github.com/snowball-tech/fractal/discussions).

You can also use the internal #engineering Slack channel if you are a member of
the Snowball tech team.

You can also check
[the dedicated `TROUBLESHOOTING.md` documentation](./docs/TROUBLESHOOTING.md)
for frequently asked question and troubleshooting.
