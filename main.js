
// Set this to your deployed origin (e.g. https://yourdomain.com).
// By default, we fall back to the current origin.
const SITE_URL = window.location.origin && window.location.origin !== 'null' ? window.location.origin : '';

document.addEventListener('DOMContentLoaded', () => {
  const heroQR = document.getElementById('hero-qr');
  if (heroQR && window.QRCode) {
    const url = SITE_URL ? SITE_URL + '/schedule.html' : 'schedule.html';
    new QRCode(heroQR, { text: url, width: 220, height: 220 });
  }
});
