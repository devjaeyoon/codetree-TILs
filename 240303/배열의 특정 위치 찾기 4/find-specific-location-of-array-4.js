const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const passedNumbers = [];

for (let number of numbers) {
    if (number === 0) {
        break;
    }
    passedNumbers.push(number);
}

let cnt = 0;
let sum = 0;

for (let passedNumber of passedNumbers) {
    if (passedNumber % 2 === 0) {
        cnt += 1;
        sum += passedNumber;
    }
}

console.log(cnt + ' ' + sum);