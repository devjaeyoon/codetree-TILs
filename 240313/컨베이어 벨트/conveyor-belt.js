const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, t] = lines[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= 2; i++) {
  arr.push(...lines[i].split(' ').map(Number));
}

for (let i = 0; i < t; i++) {
  arr.unshift(arr.pop());
}

const answer = [[], []];

for (let i = 0; i < arr.length; i++) {
  answer[Math.floor(i / n)].push(arr[i]);
}

for (let i = 0; i < 2; i++) {
  let str = '';
  for (let j = 0; j < n; j++) {
    str += answer[i][j] + ' ';
  }
  console.log(str);
}