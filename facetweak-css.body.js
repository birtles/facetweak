
function injectCSS() {
  if (document.getElementById('facetweak-style')) {
    return;
  }
  var styletag = document.createElement('style');
  styletag.textContent = STYLE;
  styletag.id = 'facetweak-style';
  document.head.appendChild(styletag);
}

if (document.documentElement) {
  injectCSS();
} else {
  window.addEventListener('DOMContentLoaded', injectCSS);
}
