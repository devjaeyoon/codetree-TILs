const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const rests = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let now = a;

while (now > 1) {
    rests[now % b]++;
    now = Math.floor(now / b);
}

let sum = 0;

for (let rest of rests) {
    sum += Math.pow(rest, 2);
}

console.log(sum);