const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n , m] = lines[0].split(' ').map(Number);
const numbers = lines[1].split(' ').map(Number);

for (let i = 0; i < m; i++) {
    const [a1, a2] = lines[i + 2].split(' ').map(Number);

    let sum = 0;

    for (let i = a1 - 1; i < a2; i++) {
        sum += numbers[i];
    }

    console.log(sum);
}