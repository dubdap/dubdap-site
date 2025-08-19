# Dubdap hero near-clone with local assets

This package mirrors the live hero (text, layout, CTAs) and uses a local hero image. A script is included to **download images & assets** from dubdap.com for full fidelity.

## Use
```bash
# optional: fetch site assets (images, fonts, css, js)
./fetch.sh

# deploy
git add -A
git commit -m "Deploy near-clone hero with local assets"
git push origin main
```

### Notes
- All paths are relative (`./assets/...`) for GitHub Pages.
- To preview at `github.io` without redirect, remove `CNAME` and clear Pages' custom domain temporarily.
