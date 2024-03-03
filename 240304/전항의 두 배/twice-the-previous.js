const [a1, a2] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const numbers = [a1, a2];

for (let i = 0; i < 8; i++) {
    numbers.push(numbers[numbers.length - 1] + 2 * numbers[numbers.length - 2]);
}

let str = '';

for (let number of numbers) {
    str += number + ' ';
}

console.log(str);