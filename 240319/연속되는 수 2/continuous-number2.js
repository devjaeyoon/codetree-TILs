const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);

let lastNum = '';
let cnt = 0;
let max = 0;

for (let i = 1; i <= N; i++) {
  if (lastNum !== lines[i]) {
    lastNum = lines[i];
    if (cnt > max) {
      max = cnt;
    }
    cnt = 1;
  } else {
    cnt++;
  }
}

if (cnt > max) {
  max = cnt;
}

console.log(max);