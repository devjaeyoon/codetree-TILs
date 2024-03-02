const scores = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

for (let score of scores) {
    sum += score;
}

console.log((sum / 8).toFixed(1));