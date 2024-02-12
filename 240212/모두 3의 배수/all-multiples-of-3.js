const numbers = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let flag = true;

for (let number of numbers) {
  if (number % 3 !== 0) {
    flag = false;
    break;
  }
}

console.log(flag ? 1 : 0);