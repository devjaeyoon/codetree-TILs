const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 2; i <= 8; i += 2) {
    let str = '';
    for (let j = b; j >= a; j--) {
        str += j + ' * ' + i + ' = ' + i * j + ' / ';
    }
    console.log(str.slice(0, str.length - 2));
}