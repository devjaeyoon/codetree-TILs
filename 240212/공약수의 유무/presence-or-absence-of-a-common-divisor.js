const [a, b] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let commonDivisor = 0;

for (let i = a; i < b; i++) {
  if (1920 % i === 0 && 2880 % i === 0) {
    commonDivisor = i;
    break;
  }
}

console.log(commonDivisor !== 0 ? 1 : 0);