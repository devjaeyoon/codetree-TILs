const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const B = lines[1];
const strings = [];
let A = lines[0];
let cnt = 1;

while (cnt < A.length) {
  A = A.split('');
  A.push(A.shift());
  A = A.join('');
  strings.push(A);
  cnt++;
}

console.log(strings.indexOf(B) === -1 ? -1 : strings.indexOf(B) + 1);