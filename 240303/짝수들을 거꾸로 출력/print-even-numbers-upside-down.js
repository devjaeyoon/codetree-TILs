const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const numbers = lines[1].split(' ').map(Number);
const passedNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        passedNumbers.push(number);
    }
}

let answer = '';

for (let passedNumber of passedNumbers.reverse()) {
    answer += passedNumber + ' ';
}

console.log(answer);