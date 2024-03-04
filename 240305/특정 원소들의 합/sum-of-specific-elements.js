const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const arr = [];

for (let i = 0; i < lines.length; i++) {
    arr.push(lines[i].split(' ').map(Number));
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i >= j) {
            sum += arr[i][j];
        }
    }
}

console.log(sum);