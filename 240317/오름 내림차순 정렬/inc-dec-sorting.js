const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);

let str1 = '';

for (let number of numbers.sort((a, b) => a - b)) {
  str1 += number + ' ';
}

console.log(str1);

let str2 = '';

for (let number of numbers.sort((a, b) => b - a)) {
  str2 += number + ' ';
}

console.log(str2);