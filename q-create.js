
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('qr-form');
  const out = document.getElementById('qr-output');
  const downloadBtn = document.getElementById('qr-download');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    out.innerHTML = '';
    const url = document.getElementById('qr-url').value.trim();
    if(!url){ alert('Enter a URL to encode'); return; }
    const size = parseInt(document.getElementById('qr-size').value || '256',10);
    const qr = new QRCode(out, { text: url, width: size, height: size });
    setTimeout(() => {
      // prepare download from generated <img> or <canvas>
      const img = out.querySelector('img');
      const canvas = out.querySelector('canvas');
      let dataURL = null;
      if (img && img.src) dataURL = img.src;
      else if (canvas) dataURL = canvas.toDataURL('image/png');
      if (dataURL) {
        downloadBtn.href = dataURL;
        downloadBtn.download = 'qr.png';
        downloadBtn.classList.remove('hidden');
      }
    }, 300);
  });
});
