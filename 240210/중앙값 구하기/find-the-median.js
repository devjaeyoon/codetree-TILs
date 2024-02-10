const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

console.log(numbers[1]);