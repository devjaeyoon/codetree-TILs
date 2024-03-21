const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, t] = lines[0].split(' ').map(Number);
const numbers = lines[1].split(' ').map(Number);

let isContinuous = numbers[0] > t;
let cnt = numbers[0] > t ? 1 : 0;
let max = 0;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > t) {
    if (isContinuous) {
      cnt++;
      continue;
    }
    isContinuous = true;
    if (cnt > max) {
      max = cnt;
      continue;
    }
    cnt = 1;
  } else {
    if (isContinuous) {
      isContinuous = false;
      if (cnt > max) {
        max = cnt;
      }
      cnt = 0;
      continue;
    }
  }
}

if (cnt > max) {
  max = cnt;
}

console.log(max);