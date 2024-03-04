const lines = require('fs').readFileSync(0).toString().trim().split('\n');

let min = lines[0].length;
let max = lines[0].length;

for (let i = 1; i < 3; i++) {
    if (lines[i].length < min) {
        min = lines[i].length;
    }
    max = lines[i].length;
}

console.log(max - min);