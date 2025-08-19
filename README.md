# QR Meeting Scheduling Site

A lightweight static website for scheduling meetings via QR codes.

## Features
- Landing page with a live QR code that points to your scheduler
- Simple, static meeting scheduler with selectable time slots
- One-click iCalendar (.ics) file generation per booking
- A "Create QR" tool to generate custom QR codes for any URL
- Responsive, modern layout with accessible components

## How to use
1. **Set your domain** (optional): In `main.js`, update `SITE_URL` to your actual domain if deploying anywhere besides a local file system.
2. **Hero QR target**: By default it points to `SITE_URL + "/schedule.html"`.
3. **Time slots**: Edit `slots` in `schedule.js` to match your availability.
4. **Branding & images**: Replace files in `/assets` with your actual logo/hero imagery. Keep the same filenames or update CSS/HTML.
5. **Analytics (optional)**: Uncomment the Plausible snippet in `index.html` and set your domain.
6. **Deploy**: Push to GitHub Pages, Netlify, Vercel, or any static host.

## Notes
- This template is original and does **not** copy content from any third-party website.
- If you own rights to specific assets, place them in `/assets` and update references accordingly.
