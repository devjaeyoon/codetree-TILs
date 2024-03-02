const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const passedNumbers = [];

for (let number of numbers) {
    if (number === 0) {
        break;
    }
    passedNumbers.push(number);
}

let result = '';

for (let passedNumber of passedNumbers.reverse()) {
    result += passedNumber + ' ';
}

console.log(result)