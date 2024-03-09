const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, A] = lines[0].split(' ');
const strings = [];

for (let i = 1; i <= n; i++) {
  strings.push(lines[i]);
}

let cnt = 0;

for (let string of strings) {
  if (string === A) {
    cnt += 1;
  }
}

console.log(cnt);