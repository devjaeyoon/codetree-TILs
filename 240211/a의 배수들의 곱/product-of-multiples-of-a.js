const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let answer = 1;

for (let i = a; i <= b; i += a) {
    answer *= i;
}

console.log(answer);