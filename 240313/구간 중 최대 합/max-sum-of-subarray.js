const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, k] = lines[0].split(' ').map(Number);
const numbers = lines[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i <= numbers.length - k; i++) {
  let sum = 0;

  for (let j = i; j < i + k; j++) {
    sum += numbers[j];
  }

  if (sum > max) {
    max = sum;
  }
}

console.log(max);