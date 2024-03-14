const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, t] = lines[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= 2; i++) {
  arr.push(...lines[i].trim().split(' ').map(Number));
}

for (let i = 0; i < t; i++) {
  arr.unshift(arr.pop());
}

let str1 = '';

for (let i = 0; i < n; i++) {
  str1 += arr[i] + ' ';
}

console.log(str1);

let str2 = '';

for (let i = n; i < 2 * n; i++) {
  str2 += arr[i] + ' ';
}

console.log(str2);