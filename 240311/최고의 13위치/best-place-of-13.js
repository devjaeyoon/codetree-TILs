const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const arr = [];
let max = 0;

for (let i = 1; i <= n; i++) {
  arr.push(lines[i].split(' ').map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 2; j++) {
    let sum = 0;
    sum += arr[i][j] + arr[i][j+1] + arr[i][j+2];
    if (sum > max) {
        max = sum;
    }
  }
}

console.log(max);