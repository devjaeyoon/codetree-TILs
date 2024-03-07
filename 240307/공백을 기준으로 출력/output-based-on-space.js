const lines = require('fs').readFileSync(0).toString().trim().split('\n');
let str = '';

for (let line of lines) {
    str += line.split(' ').join('');
}

console.log(str);