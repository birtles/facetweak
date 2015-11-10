'use strict';

if (document.documentElement) {
  addThemeColor();
} else {
  window.addEventListener('DOMContentLoaded', addThemeColor);
}

function addThemeColor() {
  console.log("Adding theme color!");
  if (document.getElementById('facetweak-themecolor')) {
    return;
  }
  var meta = document.createElement('meta');
  meta.name = 'theme-color';
  meta.content = '#3b5998';
  meta.id = 'facetweak-themecolor';
  document.head.appendChild(meta);
}
