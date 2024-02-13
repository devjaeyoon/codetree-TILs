const numbers = require('fs').readFileSync(0).toString().trim().split('\n')[1].split(' ').map(Number);

for (let number of numbers) {
    process.stdout.write(Math.abs(number) + ' ');
}