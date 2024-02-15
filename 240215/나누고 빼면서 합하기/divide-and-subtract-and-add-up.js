const lines = require('fs').readFileSync(0).toString().trim().split('\n');
let [n, m] = lines[0].split(' ').map(Number);
const numbers = lines[1].split(' ').map(Number);

let sum = 0;

while (m !== 1) {
    sum += numbers[m - 1];
    if (m % 2 === 1) {
        m--;
        continue;
    }
    if (m % 2 === 0) {
        m /= 2;
        continue;
    }
}

sum += numbers[0];

console.log(sum);