const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const passedNumbers = [];

for (let number of numbers) {
    if (number === 0) {
        break;
    }
    passedNumbers.push(number);
}

let sum = 0;

for (let passedNumber of passedNumbers) {
    sum += passedNumber;
}

console.log(sum + ' ' + (sum / passedNumbers.length).toFixed(1));