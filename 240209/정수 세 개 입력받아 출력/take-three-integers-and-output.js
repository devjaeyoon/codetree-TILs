const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [a, b] = lines[0].split(' ').map(Number);;
const c = Number(lines[1]);

console.log(a, b, c);