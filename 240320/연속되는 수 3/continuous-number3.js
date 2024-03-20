const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);

let isPositiveNumber = Number(lines[1]) > 0;
let cnt = 0;
let max = 0;

for (let i = 2; i <= N; i++) {
  if (Number(lines[i]) > 0) {
    if (isPositiveNumber) {
      cnt++;
      continue;
    }
    isPositiveNumber = true;
    if (cnt > max) {
      max = cnt;
    }
    cnt = 1;
  } else {
    if (isPositiveNumber) {
      isPositiveNumber = false;
      if (cnt > max) {
        max = cnt;
      }
      cnt = 1;
      continue;
    }
    cnt++;
  }
}

if (cnt > max) {
  max = cnt;
}

console.log(max);