const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M, K] = lines[0].split(' ').map(Number);
const studens = new Array(N).fill(0);

let criminal = -1;

for (let i = 1; i <= M; i++) {
  studens[Number(lines[i]) - 1] += 1;
  
  if (studens[Number(lines[i]) - 1] === K) {
    criminal = lines[i];
    break;
  }
}

console.log(criminal === -1 ? -1 : criminal)