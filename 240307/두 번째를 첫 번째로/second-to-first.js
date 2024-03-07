const input = require('fs').readFileSync(0).toString().trim();
const secondAlphabet = input[1];

console.log(input.replaceAll(secondAlphabet, input[0]));