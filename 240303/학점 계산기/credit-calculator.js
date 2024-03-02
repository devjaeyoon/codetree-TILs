const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const scores = lines[1].split(' ').map(Number);

let sum = 0;

for (let score of scores) {
    sum += score;
}

const average = (sum / n).toFixed(1);

let result = '';

if (average >= 4.0) {
    result += 'Perfect';
}
if (average < 4.0 && average >= 3.0) {
    result += 'Good';
}
if (average < 3.0) {
    result += 'Poor';
}

console.log(average);
console.log(result);