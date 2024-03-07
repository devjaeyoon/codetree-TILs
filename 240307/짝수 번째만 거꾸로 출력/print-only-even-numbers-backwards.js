const input = require('fs').readFileSync(0).toString().trim();
const alphabets = [];

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 1) {
        alphabets.push(input[i]);
    }
}

console.log(alphabets.reverse().join(''));