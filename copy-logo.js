const fs = require('fs');
const path = require('path');

const src = String.raw`C:\Users\buff4\.gemini\antigravity\brain\01467897-3902-478e-b986-9e8867062873\brainhouse_logo_1767106205610.png`;
const dest = String.raw`d:\ai-codings\proj04_brainhouse\brainhouse\public\images\logo.png`;

console.log('Copying from:', src);
console.log('Copying to:', dest);

try {
  fs.copyFileSync(src, dest);
  console.log('Copy successful!');
} catch (err) {
  console.error('Copy failed:', err);
}
