const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const numbers = lines[1].split(' ').map(Number);

let min = numbers[1] - numbers[0];

for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] < min) {
        min = numbers[i] - numbers[i - 1];
    }
}

console.log(min);