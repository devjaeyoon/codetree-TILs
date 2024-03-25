const numbers = require('fs')
  .readFileSync(0)
  .toString()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers[0] + ' ' + numbers[1] + ' ' + numbers[3]);