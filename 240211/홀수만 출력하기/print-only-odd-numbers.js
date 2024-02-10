const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const numbers = lines.slice(1).map(Number);

for (let number of numbers) {
    if (number % 2 === 1 && number % 3 === 0) {
        console.log(number);
    }
}