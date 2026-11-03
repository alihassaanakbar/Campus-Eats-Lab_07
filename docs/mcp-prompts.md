# Figma MCP prompts used for this project

MCP server: `figma` (remote, `https://mcp.figma.com/mcp`).
Client: **Claude Code** extension in VS Code. Config: `.mcp.json` (project root).
`.vscode/mcp.json` holds the same server in VS Code's built-in format (for Copilot users).

## 1. Pull design tokens

```
Use the Figma MCP tool get_variable_defs on <paste link to the "Desktop — 1440" frame>
List every color, spacing and radius variable used in this frame and
write them as Tailwind v4 @theme tokens (CSS custom properties) in
src/styles/input.css. Keep the Figma names: color/primary -> --color-primary.
```

## 2. Generate the page

```
Using the Figma MCP server, inspect this frame selection
<paste link to the "Desktop — 1440" frame>, extract design variables
(get_variable_defs) and generate a responsive HTML5 + Tailwind CSS layout
(get_design_context) with semantic landmarks:
- <header> + <nav> for Navbar, <main> with one <section> per Figma section
  (HeroSection, FeatureGrid, ProductGrid, ContactSection), <footer> for Footer.
- Use flex/grid only. No position:absolute for layout.
- Use the tokens from src/styles/input.css (bg-primary, text-muted, rounded-lg ...).
- Mobile first: 1 column at 375px, 2 columns at md (768px), full layout at lg (1024px+).
- Buttons are <a>/<button>, form fields have <label for>, images have descriptive alt.
```

## 3. Check against the smaller breakpoints

```
Use get_screenshot on <link to "Tablet — 768"> and <link to "Mobile — 375">
Compare these frames with index.html and fix any spacing, stacking
or font-size differences at md and base breakpoints.
```
