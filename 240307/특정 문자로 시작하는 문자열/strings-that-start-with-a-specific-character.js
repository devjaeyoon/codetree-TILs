const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const startAlphabet = lines[n + 1];
const passedStrings = [];
let passedStringsLengthSum = 0;

for (let i = 1; i <= n; i++) {
  if (lines[i].startsWith(startAlphabet)) {
    passedStrings.push(lines[i]);
    passedStringsLengthSum += lines[i].length;
  }
}

console.log(
  passedStrings.length +
    ' ' +
    (passedStringsLengthSum / passedStrings.length).toFixed(2),
);