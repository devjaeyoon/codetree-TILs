const lines = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === 'END') {
    break;
  }

  console.log(lines[i].split('').reverse().join(''));
}