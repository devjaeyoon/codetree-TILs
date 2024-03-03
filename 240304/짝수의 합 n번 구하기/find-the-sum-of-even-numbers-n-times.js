const lines = require('fs').readFileSync(0).toString().trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [a, b] = lines[i].split(' ').map(Number);

    let sum = 0;

    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) {
            sum += j;
        }
    }

    console.log(sum);
}