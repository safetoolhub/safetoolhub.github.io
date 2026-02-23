# SafeToolHub Website

Official website for [SafeToolHub](https://safetoolhub.org) — Free & Open-Source Privacy-First Tools.

## About

This repository contains the source code for [safetoolhub.org](https://safetoolhub.org), the main website for the SafeToolHub organization. It is deployed via GitHub Pages.

## Structure

```
safetoolhub.github.io/
├── index.html              # Main landing page
├── blog.html               # Blog listing page
├── CNAME                   # Custom domain (safetoolhub.org)
├── assets/
│   ├── css/style.css       # Styles (light/dark theme)
│   ├── js/i18n.js          # i18n + theme + blog engine
│   └── img/                # Icons and images
└── posts/
    ├── posts.js            # Blog posts manifest
    └── *.html              # Individual blog post pages
```

## Features

- Static HTML/CSS/JS — no build step required
- Bilingual (English / Spanish) with client-side i18n
- Light/Dark theme with system preference detection
- Blog system with post manifest
- Fully responsive design

## Deployment

This site is deployed automatically via GitHub Pages when changes are pushed to `main`.

### Custom Domain DNS Configuration

```
# A records (GitHub Pages IPs)
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# CNAME for www
www.safetoolhub.org → safetoolhub.github.io

# safetoolhub.com → redirect to safetoolhub.org (at registrar level)
```

## Local Development

Simply open `index.html` in your browser. No build tools needed.

```bash
# Or use any simple HTTP server:
python -m http.server 8000
```

## Our Projects

- **[Innerpix Lab](https://github.com/safetoolhub/innerpix-lab)** — Privacy-first photo & video management
- More coming soon...

## License

Licensed under the [GNU General Public License v3 (GPLv3)](https://www.gnu.org/licenses/gpl-3.0.html).
