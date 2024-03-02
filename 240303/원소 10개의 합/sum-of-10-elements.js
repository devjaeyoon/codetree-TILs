const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum);