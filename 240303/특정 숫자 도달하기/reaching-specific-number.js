const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const passedNumbers = [];

for (let number of numbers) {
    if (number >= 250) {
        break;
    }

    passedNumbers.push(number);
}

let sum = 0;
let result = '';

for (let number of passedNumbers) {
    sum += number;
}

console.log(sum + ' ' + (sum / passedNumbers.length).toFixed(1));