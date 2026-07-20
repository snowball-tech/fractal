# Fractal — CLAUDE.md

This covers only the parts of this repo that aren't already documented
elsewhere. For everything else, see [`AGENTS.md`](./AGENTS.md) for the full
doc index.

## What this repo is

A 2-package Yarn Berry v4 monorepo:

- `packages/fractal` — the React/Radix-UI/TailwindCSS component library,
  published as `@snowball-tech/fractal`.
- `packages/design-tokens` — JSON design tokens + `DESIGN.md` brand brief,
  published as `@snowball-tech/design-tokens`.

Public/open-source (`snowball-tech/fractal`). **Freezer** is the primary
consumer, pinning both packages to one exact version across every workspace.

## Primitives-only, even here

No composed/business components belong in this repo either — that's
Freezer's `packages/common/components/` job. Keep every component here a
primitive.

## Component-authoring pattern

Before adding a new component, search `packages/fractal/src/components/` for
one that already covers the need (including a variant of an existing
primitive) — don't create a near-duplicate.

There is no scaffold script (no `plop`/`hygen`/generator in this repo). A
component is `packages/fractal/src/components/<Component>/` with a fixed file
quintet:

- `<Component>.tsx`
- `<Component>.types.ts`
- `<Component>.constants.ts`
- `<Component>.stories.tsx`
- `<Component>.mdx`
- `index.ts`

Copy an existing folder (e.g. `Button/`) as the template. Don't invent a
different shape or skip a file.

## Design tokens govern visuals

Colors, typography, spacing and shadows live in `packages/design-tokens` —
see its [`DESIGN.md`](./packages/design-tokens/DESIGN.md). Read it before
proposing new component visuals rather than inventing off-brand values.

## Testing

Mandatory for merge — see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Commits drive releases automatically

Conventional Commits with Fractal's own extended type list (see
[`CONTRIBUTING.md`](./CONTRIBUTING.md)) feed `multi-semantic-release` on
merge to `main` — there is no manual version bump, ever. Get the commit type
right or the release is wrong.

## Storybook + its MCP endpoint

`yarn dev` (or `yarn dev-storybook`) from `packages/fractal` starts Storybook
on `:6006`. It exposes a live MCP endpoint at `http://localhost:6006/mcp`
(see [`packages/fractal/README.md`](./packages/fractal/README.md) for the
one-liner to register it: `npx mcp-add --type http --url
"http://localhost:6006/mcp" --scope project`, run once at repo root).

## Cross-repo coupling

This is Freezer's pinned dependency (`@snowball-tech/fractal`, locked at one
version across every Freezer workspace). A breaking change or a Tailwind
version bump here can't ship solo — it has to be coordinated with Freezer
(see Freezer's `docs/TOOLING.md`, which already documents "never bump
tailwindcss" from the consumer side for exactly this reason).
