const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const ages = [];

for (let line of lines) {
    ages.push(Number(line));
}

ages.pop();

let sum = 0;

for (let age of ages) {
    sum += age;
}

console.log((sum / ages.length).toFixed(2));