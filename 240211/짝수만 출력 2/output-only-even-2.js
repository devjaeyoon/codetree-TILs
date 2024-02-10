const [b, a] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';

for (let i = b; i >= a; i -= 2) {
    str += i + ' ';
}

console.log(str);