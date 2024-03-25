const [a, b, c, d] = require('fs').readFileSync(0).toString().split(' ').map(Number);
let time = 0;

if (b > d) {
  time += d + 60 - b;
  time += (c - a - 1) * 60;
} else {
  time += d - b;
  time += (c - a) * 60;
}

console.log(time);