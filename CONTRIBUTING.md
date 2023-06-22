# Contributing

## Conventions

You may find some conventions in the [`CONVENTIONS.md`](./docs/CONVENTIONS.md) file
at the root of this repository.

## Testing

You **must always** write tests for your code. This is a requirement for any
code to be merged in the `main` branch.

You are also responsible of maintaining those tests to make sure that they
always pass and that they do not become obsoletes, irrelevant of flaky.

## Versioning

All versioning of your packages and applications must follow the
[SemVer definition](https://semver.org/).

In SemVer definition, a version is defined as such: `X.Y.Z` with:

- `X` being the major version;
- `Y` being the minor version;
- `Z` being the patch version.

> For example: `1.2.3` is the major version 1, the minor version 2 and the patch
> version 3

## Committing

In order to properly detect fixes, features, breaking changes, ... this
repository relies on
[Conventional Commits](https://www.conventionalcommits.org/).

### Commit message format

```text
<type>[optional scope]: [[ticket]] <subject starting in lowercase with no final period>

[Optional body.]

[Optional footer(s)]
```

### Allowed types

- 💥 `breaking` (or `break`): a change breaking the backward compatibility and/or
  bringing a major modification in the way the package was used.  
  Such commit will lead to the creation of a new major version.
- ✨ `feat`: a new feature.  
  Such commit will lead to the creation of a new minor version.
- 🔒️ `security`: a security update.  
  Such commit will lead to the creation of a new minor version.
- 🐛 `fix`: a bug fix.  
  Such commit will lead to the creation of a new patch version.
- 💄 `style` (or `ui` or `ux`): a change that only affect the visual identity of
  the product (fonts, color, spacing, ...).  
  Such commit will lead to the creation of a new minor version.
- ⚡️ `performance` (or `perf`): a code change that improves performance.  
  Such commit will lead to the creation of a new patch version.
- 📝 `docs` (or `doc`): a documentation only changes.  
  Such commit will not lead to the creation of a new version.
- 🏗 `chores` (or `chore`, `misc` or `other`): another type of change that don't
  significantly modify the code.  
  Such commit will not lead to the creation of a new version.
- ♻️ `refactor`: a code change that neither fixes a bug nor adds a feature but
  changes something in the code architecture or organization.  
  Such commit will lead to the creation of a new patch version.
- 🚦 `tests` (or `test`): the addition or modification of tests.  
  Such commit will not lead to the creation of a new version.
- 🎨 `format` (or `lint`): a change that do not affect the meaning of the code
  (white-space, formatting, missing semi-colons, ...).  
  Such commit will not lead to the creation of a new version.
- 👷 `build`: a change that affect the build system or external dependencies.  
  Such commit will lead to the creation of a new patch version.
- ⚙️ `ci`: a change to our CI configuration files and scripts.  
  Such commit will lead to the creation of a new patch version.
- 📦 `deps` (or `dev-deps`): an update to our dependencies.  
  Such commit will lead to the creation of a new patch version.
- 🗃️ `metadata` (or `meta`): an update to metadata of the project (e.g.
  `package.json`).  
  Such commit will lead to the creation of a new patch version.
- ⏪️ `revert`: reverts a previous commit.  
  Such commit will lead to the creation of a new patch version.
- 🔖 `release` (or `bump`): forces the release of a new version.  
  Such commit will lead to the creation of a new patch version.
- 🚧 `wip`: a changes that is still being worked on.  
  Such commit will not lead to the creation of a new version.

### Scope

Try to always provide a scope to your commit to be able to quickly identify which
part of the code has been modified.
This can be the package/application name or an even precise scope.

### Subject

Concisely describe in one short sentence your change.  
Try to be meaningful and explicit in your subject.

Your sentence should not start with an uppercase letter and should not end with
a period.

If you happen to have a ticket related to this change, please add the ticket
reference at the beginning of the subject, between square brackets.

### Body

When needed, give as much as details possible in your commit body so that the
commits itself can serves as documentation about the change.

### Footer

The footer can host any information you might want to add.I

If your commit brings a breaking change, you **have to** add the
`BREAKING CHANGE` footer (or any other variation like `BREAKING CHANGES`,
`BREAKING-CHANGE`, `BREAKING-CHANGES` or simply `BREAKING`).

The detection of this footer will automatically trigger the creation of a new
major version.

## Merging

When merging a PR, you should use the `Squash and merge`
[merge method](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github),
in order to keep the Git history more concise.

## The Boy Scout Rule

### Context

Working on legacy is a part of our job. It will never end and we always have
ongoing migrations. CSS, JS, HTML, design system components, .... Everything
can be considered at some point "deprecated", "legacy" or "to be migrated". If
we leave it that way, there are high chances that these pieces of code end up as
what we like to call "tech debt".

- It is becoming a nightmare to maintain
- Newcomers are not sure which method they should use
- Both the quality of the code shipped and velocity of the future updates are
  becoming less and less efficient

### Code smells priorities

Cleaning the code and ensuring it matches the right standards is a must-have to
have a successful product. But how to prioritize it? Would you write a `TODO` on
the codebase for the next lost soul adventuring in the same part of the codebase
than you?

This is a good approach for the big changes you have to spend some time on. And
you can find a way to put it in your sprint, challenging the criticality of the
rework with your PO/EM. But what about the small updates?

- Changing a margin;
- Using a constant instead of a hardcoded string;
- Moving some files;
- Removing useless HTML tags.
- ...

### Here comes the boyscout

One of the boyscouts' rules is: "Always leave the campground cleaner than you
found it". That's a pretty good analogy for software engineering as well. As a
boy scout, you might not clean the whole forest during your travel, but why not
pick up the plastic bags along the way?

When confronted to an abnormal situation on the codebase, please try to fix it
or at least keep a trace of it to tackle it later.

### Resources

[A must read (examples in Java, but can be applied to any programming language)](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
