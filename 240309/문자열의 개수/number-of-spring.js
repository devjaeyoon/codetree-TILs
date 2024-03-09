const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const strings = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '0') {
    break;
  }
  strings.push(lines[i]);
}

console.log(strings.length);

for (let i = 0; i < strings.length; i++) {
  if (i % 2 === 0) {
    console.log(strings[i]);
  }
}