const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += Number(lines[i]);
}

sum = String(sum).split('');
sum.push(sum.shift());

console.log(sum.join(''));