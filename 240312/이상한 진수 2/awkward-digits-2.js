const input = require('fs').readFileSync(0).toString().trim();
const binNumbers = [];

for (let i = 0; i < input.length; i++) {
  let binNumberString = '';
  for (let j = 0; j < i; j++) {
    binNumberString += input[j];
  }
  if (input[i] === '0') {
    binNumberString += '1';
    for (let j = i + 1; j < input.length; j++) {
      binNumberString += input[j];
    }
  } else {
    binNumberString += '0';
    for (let j = i + 1; j < input.length; j++) {
      binNumberString += input[j];
    }
  }

  binNumbers.push(binNumberString);
}

const decNumbers = [];

for (let binNumber of binNumbers) {
  decNumbers.push(parseInt(binNumber, 2));
}

console.log(Math.max(...decNumbers));