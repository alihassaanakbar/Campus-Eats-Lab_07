# Campus Eats — HCI Lab 07 (Figma → Website)

A responsive, accessible landing page for **Campus Eats**, a campus food-ordering service.
It was designed in Figma (Auto Layout, variables, semantic layer names) and turned into
**HTML5 + Tailwind CSS v4** using the **Figma MCP server** with the **Claude Code** extension inside VS Code.

| Deliverable | Link |
| --- | --- |
| Figma file (public, view only) | https://www.figma.com/design/v1UQSPnxfTzV5NKVQr4rnV |
| Live website | _paste your GitHub Pages / Vercel / Netlify URL here_ |
| GitHub repository | _this repo_ |

## Page sections (match the Figma layer names)

| Figma frame | HTML |
| --- | --- |
| `Navbar` | `<header>` + `<nav aria-label="Main">`, mobile menu button below 1024px |
| `HeroSection` | `<section id="home">`, H1, PrimaryButton + SecondaryButton (CTA), stats `<dl>` |
| `FeatureGrid` → `FeatureCard` ×4 | `<section id="features">`, `<ul>` grid: 1 → 2 → 4 columns |
| `ProductGrid` → `ProductCard` ×4 | `<section id="popular">`, `<ul>` grid: 1 → 2 columns, "Add" buttons |
| `ContactSection` → `ContactForm` | `<section id="contact">`, `<form>` with `<label for>` on every field |
| `Footer` | `<footer>` with footer `<nav>` |

## Responsive breakpoints

Tested at **1440px** (desktop), **768px** (tablet) and **375px** (mobile) with no horizontal scrolling.
Mobile first: base styles are for phones, `sm:` / `md:` / `lg:` prefixes add columns as the screen grows.

## Accessibility & HCI checks

- Landmarks: `header`, `nav`, `main`, `section` (each labelled by its heading), `footer`.
- Skip link ("Skip to main content") for keyboard users.
- Visible focus ring on every link, button and input (`focus-visible:outline`).
- Hover states on all buttons, links and cards' actions.
- Every input has a bound `<label for>`; errors use `aria-invalid` + `aria-describedby`.
- Every image has a descriptive `alt`; decorative SVG icons use `aria-hidden="true"`.
- Mobile menu button uses `aria-expanded` / `aria-controls`; Esc closes it.
- Cart count and form result are announced with `aria-live` / `role="status"`.
- No layout uses `position: absolute`; everything is flex or grid.

## Project structure

```
index.html                 page markup (presentation)
src/styles/input.css       Tailwind entry + @theme tokens copied from Figma variables
assets/css/styles.css      compiled CSS (committed so GitHub Pages works without a build)
assets/js/constants.js     validation rules and messages
assets/js/form-rules.js    pure validation functions (no DOM)
assets/js/contact-form.js  form behaviour (DOM)
assets/js/nav-toggle.js    mobile menu behaviour
assets/js/cart-counter.js  "Add" buttons → cart count
assets/js/main.js          starts everything
assets/icons/*.svg         icons exported from Figma as SVG
assets/images/*.jpg        food photos
.mcp.json                  Figma MCP server config for Claude Code
.vscode/mcp.json           same server in VS Code's built-in MCP format
docs/mcp-prompts.md        prompts used with the Figma MCP server
```

## Run locally

```bash
npm install          # installs Tailwind CLI (only needed if you change styles)
npm run build        # compiles src/styles/input.css → assets/css/styles.css
```

Open `index.html` with the VS Code **Live Server** extension (ES modules need a local server;
double-clicking the file will not run the JavaScript).

## Author

Ali — HCI Lab 07, PUCIT.
