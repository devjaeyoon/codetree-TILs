const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const coins = [];
let [n, k] = lines[0].split(' ').map(Number);
let cnt = 0;

for (let i = 1; i <= n; i++) {
  coins.push(Number(lines[i]));
}

while (k > 0) {
  for (let i = coins.length - 1; i >= 0; i--) {
    if (k >= coins[i]) {
      k -= coins[i];
      cnt++;
      break;
    }
  }
}

console.log(cnt);