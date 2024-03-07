const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const alphabets = lines[0].split('');
const orders = lines[1].split('');

for (let order of orders) {
    if (order === 'L') {
        alphabets.push(alphabets.shift());
    }
    if (order === 'R') {
        alphabets.unshift(alphabets.pop());
    }
}

console.log(alphabets.join(''));