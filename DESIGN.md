---
name: Restoration Group of Metro Detroit
description: The job file. RGMD's claim documentation, drawn on drafting-grid paper over a familiar contractor layout.
colors:
  ink: "#14264a"
  ink-2: "#34425b"
  muted: "#586579"
  rule: "#c9d2dd"
  grid: "#e7ecf2"
  paper: "#ffffff"
  paper-2: "#f4f6f9"
  mark: "#e2661c"
  call: "#c2500e"
  call-dark: "#a2420a"
  call-tint: "#fff3ea"
  dry: "#0a64a8"
  dry-tint: "#eef5fb"
  navy-deep: "#0e1b36"
  on-navy: "#c7d1de"
  navy-rule: "#2a3d63"
  error: "#a32116"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "1.28rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Public Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 90"
  label:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  ticket-title:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
  reading:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "17px"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  sm: "2px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "56px"
  grid: "24px"
components:
  button-call:
    backgroundColor: "{colors.call}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-call-hover:
    backgroundColor: "{colors.call-dark}"
  button-call-xl:
    backgroundColor: "{colors.call}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "64px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input-ruled:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "11px 12px"
  input-ruled-focus:
    backgroundColor: "{colors.call-tint}"
  chip-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  chip-option-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  ticket-head:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    typography: "{typography.ticket-title}"
    padding: "9px 16px"
  zip-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "3px 9px"
  call-band:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.paper}"
    padding: "18px 0"
  sticky-call:
    backgroundColor: "{colors.call}"
    textColor: "{colors.paper}"
    height: "60px"
---

# Design System: Restoration Group of Metro Detroit

## Overview

**Creative North Star: "The Job File"**

The site reads like the documentation RGMD hands an adjuster: cool drafting-grid paper, navy linework, ruled form fields, file-tab ticket headers and stamped status marks, laid over the contractor layout a homeowner already knows (phone up top, call button, services, reviews, FAQ, call band). The world is the paperwork that wins claims, so the visual proof of competence is order: everything is ruled, labeled, measured and dated.

Density is calm and practical. Generous section padding, one strong heading per section with no label above it, hairline dividers between rows instead of boxes around them. Color is almost entirely navy on white. Orange appears where something is wet or where a tap gets help. Blue appears where something is dry, checked or linked. The single motion signature is the moisture map drying down from orange to blue as it enters view.

The system refuses the stock flooded-basement hero with a badge row. Photographs, when they arrive, are real RGMD job photos in a labeled plate. Until then the plate says so.

**Key Characteristics:**
- White paper with a faint 24px blue-grey drafting grid on hero surfaces.
- Navy (#14264a) linework: 2px frames and section tops, 1px pale rules between rows.
- Two oranges: a graphic marking orange and a darker call orange that carries white text.
- Archivo condensed for every heading and label; Public Sans for reading; JetBrains Mono only for measured values.
- Square corners. Sheets sit on the page with one soft, low, navy-tinted shadow.
- Tickets (header strip, ruled field rows, footer row) are the container primitive.

## Colors

A cool navy-and-paper document palette with one warm field-marking accent split into a graphic tone and a text-bearing tone, and one reading blue.

### Primary
- **Field-Marking Orange** (mark): the wet reading. Hatching on the wet zone of the moisture map, wet-reading circles and values at Day 1, legend swatch, review stars, the rating star, the hover underline on nav links and service entries, and the focus outline. A graphic color only.
- **Call Orange** (call): every call action. Call buttons, the header call button, the mobile call square, the sticky mobile call bar, the call-band phone slab, the required-field asterisk, the FAQ plus/minus bars, the ticket phone number, and the form submit. White text on it passes 4.7:1.
- **Call Orange Pressed** (call-dark): hover and pressed state for call surfaces; also the hover color of a service-entry heading.
- **Call Tint** (call-tint): background of a ruled input while focused.

### Secondary
- **Reading Blue** (dry): the dry reading and the done state. Dry-reading circles and values at Day 3, the "Dry standard reached" stamp, checklist ticks, doc-box checks, step-node centers, local-fact dots, body links and "Learn more" links.
- **Dry Tint** (dry-tint): background of the form's success panel, framed in Reading Blue.

### Neutral
- **Drafting Navy** (ink): primary text, all linework (frames, ticket borders, section-top rules, input underlines), ghost-button stroke, selected chip and day-switch fill, the topbar and CTA section ground.
- **Pencil Navy** (ink-2): secondary prose, ledes, card summaries, legend text.
- **Graphite** (muted): field terms, stat labels, ticket tags, notes, breadcrumbs, room labels on the plan.
- **Pale Rule** (rule): 1px dividers between rows inside lists, tickets and the stat strip.
- **Grid Line** (grid): the 24px drafting grid and the dividers inside the services dropdown.
- **Paper** (paper): page and sheet background.
- **Second Sheet** (paper-2): alternate section ground, ticket headers, input fills, breadcrumb strip, photo-plate frame.
- **Night Navy** (navy-deep): call band and footer ground.
- **Navy Rule Light** (navy-rule): hairline dividers on Night Navy in the footer.
- **On-Navy Grey** (on-navy): secondary text on navy grounds.
- **Error Red** (error): inline form error text only.

### Named Rules
**The Two Oranges Rule.** Field-Marking Orange (#e2661c) is never a text color and never sits behind text; it marks wet readings and draws lines, stars and focus rings. Anything a person reads or taps that is orange uses Call Orange (#c2500e) or darker.

**The Wet-to-Dry Rule.** Orange means wet, elevated or act now. Blue means dry, checked or done. Never swap them, and never use either for decoration that is neither.

**The Navy Linework Rule.** Structure is drawn, not filled: 2px Drafting Navy for a sheet's outer frame, a ticket's head and foot, and the top edge of a ruled list; 1px Pale Rule for every row divider inside.

## Typography

**Display Font:** Archivo Variable, width axis (with Archivo, Arial Narrow)
**Body Font:** Public Sans 400/600/700 (with system-ui)
**Mono Font:** JetBrains Mono 500/700 (with ui-monospace)

**Character:** Archivo, condensed to 80–90% width at heavy weights, has the compressed authority of a stamped form header. Public Sans is plain government-grade text that stays legible for a stressed reader on a phone. Mono appears only where a number was measured.

### Hierarchy
- **Display** (800, clamp(2.5rem, 5.6vw, 4.6rem) on home, clamp(2.3rem, 5.2vw, 4.1rem) on inner heroes, 1.04, width 80%): the page H1, balanced wrap.
- **Headline** (800, clamp(1.8rem, 3.4vw, 2.6rem), 1.04, width 80%): section H2s. The form card's H2 drops to 1.6rem.
- **Title** (700, 1.28rem, 1.15, width 88%): H3s, step titles (1.22rem), service-entry headings (1.45rem), FAQ questions (1.12rem, width 90%).
- **Body** (400, 17px, 1.6): all running text. Prose blocks cap at 70ch, ledes at 60ch, intro text at 44ch.
- **Lede** (400, 1.18rem, 1.55, Pencil Navy): the paragraph under an H1.
- **Button** (700, 1.1rem, width 90%, +0.01em): button labels; 1.25rem on the extra-large hero call button.
- **Label** (700, 0.74–0.8rem, +0.06–0.08em, uppercase, Archivo): field terms in tickets, stat labels, form labels and legends, footer column heads.
- **Ticket Title** (800, 0.95rem, +0.06em, uppercase): the left side of a ticket head ("Emergency line", "Moisture map", "Claim file contents").
- **Reading** (JetBrains Mono 700, 17px, tabular): moisture values on the plan. ZIP tags use the same face at 0.9rem, 500.
- **Phone** (inherits the surrounding face, tabular numerals, +0.01em, no wrap): every rendering of (313) 771-3673. Large phone numbers (ticket, call band, footer) set in Archivo 800.

### Named Rules
**The Readings-Only Mono Rule.** JetBrains Mono is for measured readings, ZIP codes and timestamps. Phone numbers, stats, labels and prose use Archivo or Public Sans with tabular numerals.

**The Bare Heading Rule.** Headings stand alone. Uppercase tracked labels belong inside a document (ticket head, field term, stat label, form label), never floating above a section heading.

## Layout

A centered 1200px container with a gutter of max(20px, safe-area inset) on each side. Sections breathe at clamp(56px, 8vw, 96px) top and bottom, alternating Paper and Second Sheet grounds. Hero surfaces carry the drafting grid (24px cells, 1px Grid Line); the moisture map carries its own 20px grid.

The home hero is a two-column split (1.2fr / 1fr, 56px gap): H1, lede, extra-large call button and a ruled checklist on the left; the job-photo plate on the right, offset 12% from the left, with the moisture-map ticket overlapping its lower edge by about 20%. The stat strip sits below as a three-cell ruled ticket footer. Inner heroes split 1.55fr / 1fr with an "Emergency line" ticket on the right. Content pairs use 1fr / 1fr at a 56px gap.

Responsive behavior: hero splits collapse to one column at 960px (home) and 900px (inner); content pairs at 800–900px; the nav becomes a stacked drop-down panel at 1000px; ruled two-column lists become one column at 560px; the stat strip stacks into label/value rows at 600px; the brand text hides below 400px. At 700px and below a 60px sticky call bar is fixed to the bottom of every screen and the body gains matching bottom padding.

Spacing steps in use: 8, 12, 16, 24, 32, 48 and 56px.

## Elevation & Depth

Mostly flat: depth comes from navy frames and the paper-on-grid relationship. Sheets of paper (tickets, the form card, the photo plate's companion map) get one soft, low, navy-tinted drop so they sit on the grid like documents on a desk. Call buttons get a short warm glow. No hard offset shadows anywhere.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 22px 44px -26px rgba(20,38,74,.45)`): hero ticket, moisture-map ticket, claim-file sheet, form card.
- **Call Glow** (`box-shadow: 0 8px 18px -8px rgba(194,80,14,.6)`): call buttons at rest; compresses to `0 3px 8px -4px` when pressed.
- **Dropdown** (`box-shadow: 0 18px 40px -12px rgba(20,38,74,.28)`): the desktop services menu.
- **Sticky Bar** (`box-shadow: 0 -8px 24px -10px rgba(20,38,74,.5)`): the mobile sticky call bar, cast upward.

### Named Rules
**The Paper-on-Desk Rule.** A shadow means "this is a sheet of paper." Only tickets, menus and call surfaces get one; sections, lists and rows never do.

## Shapes

Square. Sheets, tickets, inputs, chips, ZIP tags and review frames have 0 radius. Buttons, the menu button and the mobile call square take a 2px edge, just enough to read as a pressed form button. Circles are reserved for instruments: moisture-reading markers, legend swatches, dry-log step nodes, local-fact bullets and the live-status dot. Ruled-list bullets are open 10px squares in navy.

Lines do the shaping: 2px navy frames, 1px pale row rules, a 2px navy bottom rule under the sticky header and under every hero, and 2px dashed navy-light rules above and below the call band. The empty photo plate is filled with a faint 45° hatch. The "Dry standard reached" stamp tilts -3° when it lands.

## Components

### Buttons
Stamped form buttons: heavy condensed labels, square edges, one job each.
- **Shape:** nearly square (2px), minimum height 52px (64px for the extra-large hero call), 2px border.
- **Call:** Call Orange with white text, phone icon, label then phone number in tabular numerals; Call Glow shadow. Every page has at least one.
- **Hover / Focus:** Call Orange Pressed on hover; pressed state drops 1px and shortens the glow; 3px Field-Marking Orange focus outline offset 3px (white on navy grounds). Transitions 0.2s on cubic-bezier(.16, 1, .3, 1).
- **Ghost:** 2px Drafting Navy stroke on Paper, fills navy with white text on hover. On navy grounds the ghost inverts (white stroke, fills white with navy text).
- **Disabled:** 60% opacity with a wait cursor while the form sends.

### Chips
- **Style:** damage-type radio options as square 40px tiles with a 2px navy stroke and Public Sans 600 text; the native radio stays visible, tinted Call Orange.
- **State:** a checked option fills Drafting Navy with white text.

### Cards / Containers
- **Tickets** are the primary container: a Second Sheet head strip (ticket title left in uppercase Archivo, a small Graphite tag right) over a 2px navy rule, ruled field rows below (uppercase field term over the value), and an optional foot row over another 2px navy rule. Paper background, 2px navy frame, Sheet shadow, 0 radius, 16px horizontal padding.
- **Service index** entries are ruled rows, not boxed cards: heading, summary and "Learn more" link on one baseline across three columns (stacking under 800px), 22px vertical padding, 1px row rules under a 2px navy top rule. On hover an orange 2px line draws across the top edge left to right and the heading turns Call Orange Pressed.
- **Reviews** are framed sheets (2px navy, 24px padding, no shadow): orange stars, the quote, and a ruled caption with name, source and service.
- **Stat strip:** a three-cell ruled ticket footer, uppercase labels over Archivo 800 condensed numbers.

### Inputs / Fields
- **Style:** ruled fields. Second Sheet fill, no side or top border, a 2px Drafting Navy underline, 0 radius, Public Sans 1rem. Labels sit above in uppercase Archivo 0.8rem; required marks are Call Orange.
- **Focus:** the fill warms to Call Tint and the underline turns Call Orange; no outline ring.
- **Error / Success:** errors in Error Red 600 text, with the phone number offered as the fallback; success is a Dry Tint panel framed 2px in Reading Blue.

### Navigation
- **Topbar:** a 34px Drafting Navy strip with a live dot, "24/7 emergency response" and the phone in white bold.
- **Header:** sticky, Paper ground, 2px navy bottom rule, 76px row with the logo mark plus uppercase condensed brand text, Public Sans 600 links, a services drop-down (2px navy frame, Dropdown shadow, grid-line dividers) and a call button at the end. Link hover is an underline drawn in Field-Marking Orange at 2px.
- **Mobile (≤1000px):** a Call Orange 46px phone square and a bordered "Menu" button; the nav opens as a full-width stacked panel with ruled rows.

### Moisture Map (signature)
An illustrative basement floor plan in a ticket ("Moisture map" / "Example"). Navy walls at 6px and 4px, stair treads, uppercase room labels, six lettered reading points. On entering view the wet zone's orange hatch fades, readings count down and shift from Field-Marking Orange to Reading Blue over about 2.6s, and the Graphite "Drying in progress" stamp becomes a tilted blue "Dry standard reached." A Day 1 / Day 2 / Day 3 segmented switch (2px navy, pressed day filled navy) replays the drying. With reduced motion the map renders dry immediately.

### Dry Log (Steps)
A numbered process drawn as a 2px navy vertical line with 20px circular nodes (navy ring, blue center); titles in Title style, body in Pencil Navy at 0.98rem.

### Call Band
A Night Navy strip between dashed rules: uppercase condensed text, hours in On-Navy Grey, and a Call Orange phone slab pushed right (full width under 700px).

### Job Photo Plate
A 16:10 framed plate with a ticket head ("Job photo", tagged "Coming soon" until a real RGMD photo is supplied). Empty state is a faint hatch with a drawn camera icon and a plain caption.

## Do's and Don'ts

### Do:
- **Do** put a Call Orange (#c2500e) call action in every viewport: header button, hero call, call band, CTA section, and the 60px sticky bar on phones.
- **Do** build containers as tickets: head strip, ruled field rows, 2px navy frame, Sheet shadow.
- **Do** divide rows with 1px Pale Rule (#c9d2dd) under a 2px Drafting Navy top edge instead of boxing each item.
- **Do** set phone numbers in the surrounding face with tabular numerals and no wrapping.
- **Do** label anything illustrative or pending as such ("Example", "Coming soon") in the ticket tag.
- **Do** ease state changes on cubic-bezier(.16, 1, .3, 1) and give every animation a reduced-motion end state.
- **Do** draw icons from the one stroke set: 24px grid, 2.25px strokes, square caps, mitered joins.

### Don't:
- **Don't** set text in or on Field-Marking Orange (#e2661c); it is for wet readings and drawn marks only.
- **Don't** use JetBrains Mono for phone numbers, labels, stats or prose.
- **Don't** place an uppercase section label above a heading.
- **Don't** use hard offset shadows, or shadows on sections and list rows.
- **Don't** round corners beyond 2px; circles are only for reading markers, swatches and step nodes.
- **Don't** show stock photography as RGMD work; job photos are real or the plate says "Coming soon."
- **Don't** use Reading Blue and orange interchangeably: blue is dry and done, orange is wet and act-now.
