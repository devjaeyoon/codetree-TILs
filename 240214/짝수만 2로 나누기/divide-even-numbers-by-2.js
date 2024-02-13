const lines = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);

function modify(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] /= 2;
        }
    }
}

modify(numbers);

for (let number of numbers) {
    process.stdout.write(number + ' ');
}