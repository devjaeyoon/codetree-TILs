const [a, b, c] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(a + b + c);
console.log((a + b + c) / 3);
console.log(a + b + c - (a + b + c) / 3);