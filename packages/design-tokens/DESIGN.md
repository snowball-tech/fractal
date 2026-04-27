---
version: "alpha"
name: Snowball
description: "Finance made human — investing simplified, growth made accessible"
colors:
  primary: "#FF8ACD"
  secondary: "#000000"
  background: "#FFFBF4"
  surface: "#FFFFFF"
  surface-dark: "#000000"
  text: "#000000"
  text-on-dark: "#FFFFFF"
  text-muted: "#7E7C78"
  text-subtle: "#B7B1A6"
  text-disabled: "#B7B1A6"
  text-primary: "#FF8ACD"
  separator: "#DDD9D4"
  disabled-bg: "#DDD9D4"
  error: "#FF5454"
  error-light: "#FFD6D6"
  success: "#3CD39D"
  success-light: "#CFFCE3"
  warning: "#FF9F69"
  warning-light: "#FFEAD1"
  blue: "#8AF1FF"
  blue-light: "#D6FAFF"
  green: "#76F7AE"
  green-light: "#CFFCE3"
  pink-light: "#FFE2F3"
  purple: "#B37DFF"
  purple-light: "#F0E5FF"
  yellow: "#FFE959"
  yellow-light: "#FFF8C5"
typography:
  display-1:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "80px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  display-2:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "72px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  display-wide:
    fontFamily: "PolySansWide, Arial Black, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  h1:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  h2:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  h3:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.4167
    letterSpacing: 0
  h4:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: 0
  body:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0
  body-medium:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.625
    letterSpacing: 0
  body-bold:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.625
    letterSpacing: 0
  body-sm:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6429
    letterSpacing: 0
  body-sm-medium:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6429
    letterSpacing: 0
  label:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6429
    letterSpacing: 0
  caption:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6667
    letterSpacing: 0
  caption-medium:
    fontFamily: "PolySans, system-ui, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.6667
    letterSpacing: 0
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  0: "0px"
  px: "1px"
  half: "4px"
  1: "8px"
  2: "16px"
  3: "24px"
  4: "32px"
  5: "40px"
  6: "48px"
  8: "64px"
  10: "80px"
  12: "96px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text-on-dark}"
    typography: "{typography.label}"
    borderRadius: "{rounded.md}"
    border: "2px solid {colors.secondary}"
    shadow: "-2px 2px 0 0 {colors.primary}"
    paddingX: "{spacing.3}"
    paddingY: "{spacing.2}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    borderRadius: "{rounded.md}"
    border: "2px solid {colors.secondary}"
    shadow: "-2px 2px 0 0 {colors.secondary}"
    paddingX: "{spacing.3}"
    paddingY: "{spacing.2}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    borderRadius: "{rounded.md}"
    border: "2px solid {colors.secondary}"
    paddingX: "{spacing.3}"
    paddingY: "{spacing.2}"
  card:
    backgroundColor: "{colors.surface}"
    border: "2px solid {colors.secondary}"
    borderRadius: "{rounded.lg}"
    shadow: "-2px 4px 0 0 {colors.secondary}"
    padding: "{spacing.4}"
  card-primary:
    backgroundColor: "{colors.primary}"
    border: "2px solid {colors.secondary}"
    borderRadius: "{rounded.lg}"
    shadow: "-2px 4px 0 0 {colors.secondary}"
    padding: "{spacing.4}"
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    border: "2px solid {colors.secondary}"
    borderRadius: "{rounded.lg}"
    shadow: "-2px 4px 0 0 {colors.primary}"
    padding: "{spacing.4}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    placeholderColor: "{colors.text-muted}"
    border: "2px solid {colors.secondary}"
    borderRadius: "{rounded.md}"
    typography: "{typography.body}"
    padding: "{spacing.2}"
  badge:
    typography: "{typography.caption-medium}"
    borderRadius: "{rounded.full}"
    paddingX: "{spacing.1}"
    paddingY: "{spacing.half}"
  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text}"
    border: "2px solid {colors.secondary}"
  badge-success:
    backgroundColor: "{colors.success-light}"
    textColor: "{colors.text}"
  badge-error:
    backgroundColor: "{colors.error-light}"
    textColor: "{colors.text}"
  badge-warning:
    backgroundColor: "{colors.warning-light}"
    textColor: "{colors.text}"
---

## Overview

Snowball is a French fintech platform democratizing investing and personal finance. The design system reflects the brand's core values: **accessibility, boldness, and approachability**. The visual language pairs a warm off-white base (`#FFFBF4`) with black and a vibrant pink primary (`#FF8ACD`) to create a neo-brutalist aesthetic — energetic and tactile, yet warm and inviting.

The platform targets French-speaking investors (from curious beginners to seasoned enthusiasts) who want financial education and portfolio management to feel human and exciting rather than intimidating and corporate.

**Visual personality:** Bold, warm, accessible. Offset hard shadows and strong 2px borders create a tactile "lifted paper" depth (the system calls this "brutal" style) while the warm cream background and signature pink keep the tone friendly. Typography is exclusively **PolySans** — a custom typeface expressive across three weights (400, 600, 800) with a wide optical variant for display highlights. No gradients, no soft glows: visual hierarchy comes from weight, size, and offset shadows.

## Colors

### Primary Brand Colors

- **primary** `#FF8ACD` — The signature Snowball pink. Used for primary interactive states (secondary buttons, hover on dark surfaces), accent highlights, and decorative elements. Energetic, distinctive, and ownable.
- **secondary** `#000000` — Ink black. Used for borders, offset shadows, dark-surface text, and primary buttons. The brutalist anchor of the palette.
- **background** `#FFFBF4` — Warm cream white (not pure white). The default page background — creates a warm, papery feel that avoids clinical sterility.
- **surface** `#FFFFFF` — Pure white for cards and elevated UI surfaces, creating contrast against the cream background.
- **surface-dark** `#000000` — Black surface for inverted hero sections or high-contrast marketing blocks.

### Text Colors

- **text** `#000000` — Default body text on light backgrounds.
- **text-on-dark** `#FFFFFF` — Text on dark/black surfaces.
- **text-muted** `#7E7C78` — Placeholders, secondary metadata, de-emphasized info.
- **text-subtle** `#B7B1A6` — Tertiary text, disabled labels.
- **text-primary** `#FF8ACD` — Inline emphasis in the brand color; use sparingly.

### Semantic / Feedback Colors

- **error** `#FF5454` / **error-light** `#FFD6D6` — Danger states and form validation errors.
- **success** `#3CD39D` / **success-light** `#CFFCE3` — Positive outcomes, confirmations, portfolio gains.
- **warning** `#FF9F69` / **warning-light** `#FFEAD1` — Caution states and pending actions.
- **separator** `#DDD9D4` — Hairline dividers between content sections.

### Decorative Colors

Used for category tags, data visualization, illustrated elements. Never for semantic meaning.

- **blue** `#8AF1FF` / **blue-light** `#D6FAFF`
- **green** `#76F7AE` / **green-light** `#CFFCE3`
- **pink-light** `#FFE2F3` (lighter tint of primary; use for subtle pink surfaces)
- **purple** `#B37DFF` / **purple-light** `#F0E5FF`
- **yellow** `#FFE959` / **yellow-light** `#FFF8C5`

## Typography

The exclusive typeface is **PolySans**, used in two optical widths (normal and wide) across three weights (400 standard, 600 median, 800 bold). Typography is mobile-first and responsive — display and heading sizes scale up at the `md` breakpoint (768px).

| Role | Size (desktop) | Mobile | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| `display-1` | 80px | 48px | 800 | 1.4 | Hero headline, primary marketing punchline |
| `display-2` | 72px | 40px | 800 | 1.4 | Secondary hero, large feature headers |
| `display-wide` | 56px | 32px | 800 | 1.4 | Highlight text using PolySansWide optical variant |
| `h1` | 40px | 32px | 800 | 1.4 | Page titles |
| `h2` | 32px | 28px | 800 | 1.4 | Section headings |
| `h3` | 24px | 24px | 800 | 1.42 | Card headings, subsections |
| `h4` | 20px | 20px | 800 | 1.4 | Minor headings |
| `body` | 16px | 16px | 400 | 1.625 | Default body copy |
| `body-medium` | 16px | 16px | 600 | 1.625 | Emphasized body, link text |
| `body-bold` | 16px | 16px | 800 | 1.625 | Strong inline emphasis |
| `body-sm` | 14px | 14px | 400 | 1.643 | Secondary body, metadata, table cells |
| `body-sm-medium` | 14px | 14px | 600 | 1.643 | Emphasized small text |
| `label` | 14px | 14px | 600 | 1.643 | Button text, form labels, tab items |
| `caption` | 12px | 12px | 400 | 1.667 | Fine print, timestamps |
| `caption-medium` | 12px | 12px | 600 | 1.667 | Badge labels, tag text |

**Letter spacing is always `0`** — no tracking applied anywhere in the system.

## Layout

- **Grid:** 12-column with 24px gutters on desktop (≥768px); single-column with 16px gutters on mobile.
- **Container max-width:** 1280px (`xl` breakpoint), centered with horizontal padding of 24px–48px.
- **Spacing scale:** 8px base unit. Steps: `half` 4px → `1` 8px → `2` 16px → `3` 24px → `4` 32px → `5` 40px → `6` 48px → `8` 64px → `10` 80px → `12` 96px.
- **Breakpoints (mobile-first, min-width):** `xxs` 0px, `xs` 350px, `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `xxl` 1536px.
- **Section vertical padding:** 48px–80px on desktop; 32px–48px on mobile. Sections breathe generously.

## Elevation & Depth

Snowball uses a **neo-brutalist shadow system** — no soft blurs, only hard offset `box-shadow` values. Depth communicates interactivity and content priority.

| Level | Shadow value | Use case |
|---|---|---|
| Flat (none) | no shadow | Tertiary/ghost elements, disabled states |
| Level 1 (subtle) | `-2px 2px 0 0 [color]` | Buttons at rest, small interactive cards |
| Level 2 (prominent) | `-2px 4px 0 0 [color]` | Primary cards, featured content blocks |

**Shadow colors:**
- **Default black:** `rgba(0, 0, 0, 1)` — used on light (cream/white) backgrounds.
- **Primary pink:** `#FF8ACD` — used on dark/black surfaces, or for playful button accents.

On hover/press, interactive elements animate their shadow (shift or remove) to simulate physical press depth.

## Shapes

Corner radius philosophy: **angular by default, rounded for interactive elements**.

- **none** `0px` — Hard corners for layout blocks, decorative sections, marketing banners.
- **sm** `4px` — Subtle rounding for small tags and chips.
- **md** `8px` — Standard interactive elements: buttons, inputs, dropdowns.
- **lg** `16px` — Cards, panels, modals, tooltips.
- **full** `9999px` — Pill shapes: toggle switches, pill badges, avatar circles, icon-only round buttons.

The system leans angular/geometric — consistent with the neo-brutalist aesthetic.

## Components

### button-primary
Black background, white text, 2px black border, `{rounded.md}`, shadow `-2px 2px 0 0 {colors.primary}` (pink). The single dominant action per view.

### button-secondary
Pink (`{colors.primary}`) background, black text, 2px black border, `{rounded.md}`, shadow `-2px 2px 0 0 {colors.secondary}` (black). For secondary CTAs placed alongside a primary button.

### button-outline
Transparent background, black text, 2px black border, `{rounded.md}`, no shadow. For tertiary actions, cancel/back flows.

### card
White surface (`{colors.surface}`), 2px black border, `{rounded.lg}`, shadow `-2px 4px 0 0 {colors.secondary}`. For content grouping, article previews, portfolio items.

### card-primary
Pink background, 2px black border, `{rounded.lg}`, shadow `-2px 4px 0 0 {colors.secondary}`. For featured or promotional content blocks.

### card-dark
Black background, 2px black border, `{rounded.lg}`, shadow `-2px 4px 0 0 {colors.primary}` (pink shadow on dark). For inverted featured sections.

### input
White surface, 2px black border, `{rounded.md}`, `{typography.body}` text. Placeholder text in `{colors.text-muted}`. On focus: retain border, animate the field label upward.

### badge / badge-primary
Pill shape (`{rounded.full}`), `{typography.caption-medium}`. Primary variant: pink background + 2px black border. Semantic variants use their light background color (no border).

## Do's and Don'ts

**Do:**
- Always pair `{colors.primary}` pink with a 2px black border for visual grounding — the pink never floats without its black anchor
- Use hard offset shadows exclusively — level 1 for buttons/small cards, level 2 for primary content cards
- Keep the warm cream `#FFFBF4` as the default page background; use white only for card surfaces
- Build typographic hierarchy through weight: 800 for all headings, 400–600 for body
- Keep all spacing values as multiples of 8px; use `half` (4px) only for internal component padding

**Don't:**
- Never use blurred/soft shadows (`box-shadow: 0 4px 12px rgba(...)`) — this system uses hard offset shadows only
- Never use gradients — the system achieves depth and hierarchy through shadow, border, and weight, not color gradients
- Never apply letter-spacing — tracking is always `0` in this system
- Never use font sizes below 12px (`{typography.caption}`)
- Never use `{colors.primary}` pink to indicate error, warning, or success states — always use the dedicated semantic colors (`{colors.error}`, `{colors.warning}`, `{colors.success}`)
- Never mix the decorative palette (blue, green, purple, yellow) with primary pink at the same visual weight in a single component — decorative colors are backgrounds/accents, pink is the brand action color
