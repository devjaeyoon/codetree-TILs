const numbers = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i - 1]);
        break;
    }
}