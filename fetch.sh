#!/usr/bin/env bash
set -euo pipefail
# Requires: wget (brew install wget) or curl (used below individually).
mkdir -p assets/img assets/css assets/js assets/fonts
echo "Mirroring assets from dubdap.com ..."

# 1) Mirror common asset types with wget (preferred)
if command -v wget >/dev/null 2>&1; then
  wget -e robots=off -r -np -nH --cut-dirs=0 \
    -A ".png,.jpg,.jpeg,.svg,.webp,.gif,.woff,.woff2,.ttf,.otf,.css,.js" \
    --reject-regex=".*(\\?|\&).*" \
    -P mirrored \
    https://dubdap.com/
  # Copy into local assets keeping structure flat
  find mirrored -type f -iname "*.css" -exec cp {} assets/css/ \;
  find mirrored -type f -iname "*.js" -exec cp {} assets/js/ \;
  find mirrored -type f -iregex ".*\\.\(png\\|jpg\\|jpeg\\|svg\\|webp\\|gif\)" -exec cp {} assets/img/ \;
  find mirrored -type f -iregex ".*\\.\(woff2\\|woff\\|ttf\\|otf\)" -exec cp {} assets/fonts/ \;
else
  echo "wget not found; falling back to curated curl downloads..."
  curl -L -o assets/img/homeScreen.jpg "https://uploads-ssl.webflow.com/634ddfc1d66adbbc86998319/634f4cef141487e59a0a8a6a_homeScreen.jpg"
  curl -L -o assets/img/feature_faces.png "https://uploads-ssl.webflow.com/634ddfc1d66adbbc86998319/634ddfc2d66adb72ca998358_Feature-Image-01.png"
  curl -L -o assets/img/feature_icons.png "https://uploads-ssl.webflow.com/634ddfc1d66adbbc86998319/634ddfc2d66adb011499836f_Features-Image-2-min.png"
  curl -L -o assets/img/calendar1.png "https://uploads-ssl.webflow.com/634ddfc1d66adbbc86998319/634ddfc2d66adb5f6d99835f_Calendar1.png"
  curl -L -o assets/img/calendar2.png "https://uploads-ssl.webflow.com/634ddfc1d66adbbc86998319/634ddfc2d66adb890e998360_Calendar2.png"
fi

echo "Done. Review 'assets/' and update HTML if needed. Then:"
echo "  git add -A && git commit -m 'Mirror dubdap assets' && git push origin main"
