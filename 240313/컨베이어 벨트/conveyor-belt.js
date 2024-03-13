const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, t] = lines[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= 2; i++) {
  arr.push(...lines[i].split(' ').map(Number));
}

for (let i = 0; i < t; i++) {
  arr.unshift(arr.pop());
}

for (let i = 0; i < arr.length - 1; i += n) {
  let str = '';

  for (let j = 0; j < n; j++) {
    str += arr[i + j] + ' ';
  }

  console.log(str);
}