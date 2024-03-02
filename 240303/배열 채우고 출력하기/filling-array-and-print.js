const strings = require('fs').readFileSync(0).toString().trim().split(' ');

let result = '';

for (let string of strings.reverse()) {
    result += string;
}

console.log(result);