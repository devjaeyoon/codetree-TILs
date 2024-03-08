const lines = require('fs').readFileSync(0).toString().trim().split('\n');
let sum = 0;

for (let i = 0; i < 2; i++) {
    let numberString = '';

    for (let j = 0; j < lines[i].length; j++) {
        if (isFinite(Number(lines[i][j]))) {
            numberString += lines[i][j];
        }
    }

    sum += Number(numberString);
}

console.log(sum);