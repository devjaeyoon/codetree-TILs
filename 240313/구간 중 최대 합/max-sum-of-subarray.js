const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, k] = lines[0].split(' ').map(Number);
const numbers = lines[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i <= numbers.length - k; i++) {
  if (numbers[i] + numbers[i + 1] + numbers[i + 2] > max) {
    max = numbers[i] + numbers[i + 1] + numbers[i + 2];
  }
}

console.log(max);