function toggleNav(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
  const btn = document.querySelector('.nav-toggle');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', (!expanded).toString());
}

(function(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
