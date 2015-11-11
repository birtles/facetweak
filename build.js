#!/usr/bin/env node

const fs = require('fs');

const css = fs.readFileSync('facetweak.css', 'utf8');
const out = fs.createWriteStream('facetweak-css.js', { encoding: 'utf8' });

out.write("const STYLE =\n");
css.split(/\r?\n/).forEach(function (line) {
  if (line) {
    out.write("  '" + line + "\\n' +\n");
  }
});
out.write("  '';\n\n");

const js = fs.readFileSync('facetweak-css.body.js', 'utf8');
out.write(js);

out.end();
