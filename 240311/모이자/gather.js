const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const distances = lines[1].split(' ').map(Number);
const distancesSum = [];

for (let i = 0; i < distances.length; i++) {
    distancesSum.push(0);
}

for (let i = 0; i < distances.length; i++) {
    for (let j = 0; j < distances.length; j++) {
        if (i === j) {
            continue;
        }
        distancesSum[i] += Math.abs(j - i) * distances[j];
    }
}

console.log(Math.min(...distancesSum));