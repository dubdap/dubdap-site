# Dubdap Static Site (GitHub Pages)

A slick, minimal static site scaffold for Dubdap. This repo includes placeholders for your current marketing copy, plus separate pages for **Privacy** and **Terms** (you must paste your official text before publishing).

## 1) Where to put your content

- `index.html` — Replace placeholder text in each section with your approved copy.
  - Hero heading + lede
  - Features cards
  - About text
  - How it works steps
  - Trust bullets
- `privacy.html` — Paste your exact, current Privacy Policy text.
- `terms.html` — Paste your exact, current Terms of Service text.

> ⚠️ Only paste text you own or have permission to reproduce. If unsure, link to the originals instead.

## 2) Optional: Plausible Analytics

In `index.html` head, uncomment the Plausible `<script>` tag and set `data-domain` to your domain (e.g., `dubdap.github.io` or `dubdap.com`).

## 3) Deploy to GitHub Pages

1. Create a new GitHub repo (e.g., `dubdap-site`).
2. Add these files and commit.
3. Push to `main` (or `master`).
4. In GitHub → **Settings** → **Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` → `/root`
5. Wait for Pages to build. Your site will be live at `https://<username>.github.io/<repo>/`.

### Custom domain (optional)
- Add your domain (e.g., `www.dubdap.com`) in **Settings → Pages**.
- Put your domain (only) in the `CNAME` file.
- Create DNS records at your registrar:
  - `A` records to GitHub Pages IPs
  - `CNAME` from `www` → `<username>.github.io`

## 4) Local preview

Open `index.html` in a browser (no build needed).

## 5) Folder overview

```
assets/
  css/styles.css
  js/main.js
  img/logo.svg
index.html
privacy.html
terms.html
404.html
.nojekyll
CNAME
README.md
```

## 6) Android link

The Android button currently points to the Play Store home page. Replace it with your exact package URL when available.

---

© 2025 Dubdap. All rights reserved.
