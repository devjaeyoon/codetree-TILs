const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const A = lines[1].split(' ').map(Number).sort((a, b) => a - b);
const B = lines[2].split(' ').map(Number).sort((a, b) => a - b);

let flag = true;

for (let i = 0; i < n; i++) {
  if (A[i] !== B[i]) {
    flag = false;
    break;
  }
}

console.log(flag ? 'Yes' : 'No');