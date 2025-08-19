# Dubdap static site with local images

This package is ready for GitHub Pages (root or docs). Images are local. Use `fetch.sh` once to download the real images from dubdap.com and replace the placeholders.

## Fix for large images
- CSS clamps hero image height and ensures all images are responsive:
  - `.hero .card img { max-height: 480px; object-fit: contain; }` on wide screens
  - `.card img { max-width: 100%; height: auto; }` for all images

## Use
```bash
# 1) (optional) run once to fetch the real media
./fetch.sh

# 2) deploy
git add -A
git commit -m "Deploy site with local images"
git push origin main
```

## Files
- index.html, privacy.html, terms.html, contact.html, 404.html
- assets/css/styles.css, assets/js/main.js
- assets/img/ (placeholders, replaced by fetch.sh)
- CNAME (dubdap.com), robots.txt, sitemap.xml, .nojekyll
