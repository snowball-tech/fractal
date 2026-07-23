---
name: fractal-create-pr
description: >-
  Create a GitHub pull request for the Fractal repo with Snowball's
  Conventional Commit title format. Use when the user asks to open, create,
  or draft a PR, or otherwise signals the change is ready to ship.
---

# Create PR

Create a pull request that follows this repo's conventions. See
[`CONTRIBUTING.md`](../../../CONTRIBUTING.md) for the full commit rules.

## Title

PRs are squash-merged, so the title becomes the commit — it must match
Conventional Commits:

```text
<type>[(scope)]: <subject in lowercase, no final period>
```

- `type`: one of the types in `CONTRIBUTING.md` (`feat`, `fix`, `breaking`,
  `security`, `style`/`ui`/`ux`, `perf`, `docs`, `refactor`, `tests`,
  `format`/`lint`, `build`, `ci`, `deps`, `chore`, ...) — get it right, it
  drives the automatic release.
- `scope`: the package (`fractal`, `design-tokens`) or a precise area.

Examples:
- `feat(fractal): add Combobox component`
- `fix(design-tokens): correct shadow token value`

## Body template

```markdown
## What

<one or two sentences on what this PR does>

## Why

<the motivation / context>

## How

- <key change 1>
- <key change 2>

## Testing

- [ ] <how you validated it — tests, Storybook, manual>

## Notes

<breaking changes, screenshots, follow-ups — or "N/A">
```

## Steps

1. Check the current branch and its diff vs. `main`.
2. Confirm tests exist for the change — required for merge per
   `CONTRIBUTING.md`. Don't run the full `yarn quality` suite yourself (CI's
   `quality.yml` already gates the PR); just sanity-check nothing obviously
   broken.
3. Scan the diff for anything that looks like a committed secret, key,
   token, or `.env` value. If you find one, flag it and stop.
4. Draft the title + body from the actual commits/diff — don't invent scope.
5. Push the branch if needed, then create the PR with `gh`:

```bash
gh pr create --title "<title>" --body "$(cat <<'EOF'
<body from template above>
EOF
)"
```

6. Return the PR URL.

## Reminders

- Squash-merge is the merge method — the title matters most; get the
  Conventional Commit type right or the automatic release is wrong.
