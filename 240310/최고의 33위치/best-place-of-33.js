const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(lines[i].split(' ').map(Number));
}

let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = 0; j < N - 2; j++) {
    let sum = 0;

    sum +=
      arr[i][j] +
      arr[i + 1][j] +
      arr[i + 2][j] +
      arr[i][j + 1] +
      arr[i + 1][j + 1] +
      arr[i + 2][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 2] +
      arr[i + 2][j + 2];

    if (sum > max) {
      max = sum;
    }  
  }
}

console.log(max);