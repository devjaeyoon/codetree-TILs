const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const weights = lines[1].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < weights.length; i++) {
  for (let j = i + 1; j < weights.length; j++) {
    if (weights[j] >= weights[i]) {
      for (let k = j + 1; k < weights.length; k++) {
        if (weights[k] >= weights[j]) {
          cnt++;
        }
      }
    }
  }
}

console.log(cnt);