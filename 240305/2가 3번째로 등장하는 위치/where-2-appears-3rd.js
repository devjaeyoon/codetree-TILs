const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const numbers = lines[1].split(' ').map(Number);

let cnt = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2) {
        cnt++;
        if (cnt === 3) {
            console.log(i + 1);
            break;
        }
    }
}