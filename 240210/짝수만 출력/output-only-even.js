const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        str += i + ' ';
    }
}

console.log(str);