const numbers = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = 0;

for (let number of numbers) {
    if (number % 2 === 0) {
        cnt++;
    }
}

console.log(cnt);