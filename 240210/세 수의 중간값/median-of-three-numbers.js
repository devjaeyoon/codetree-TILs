const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

console.log (b > a && b < c ? 1 : 0);