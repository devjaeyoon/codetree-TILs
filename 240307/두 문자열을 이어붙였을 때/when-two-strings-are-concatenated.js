const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const A = lines[0];
const B = lines[1];

console.log(A + B === B + A);