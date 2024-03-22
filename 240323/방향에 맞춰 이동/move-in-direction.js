const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(lines[0]);
const currentPos = [0, 0];

for (let i = 1; i <= N; i++) {
  const [pos, moves] = lines[i].split(' ');

  const length = Number(moves);

  if (pos === 'N') {
    for (let j = 0; j < length; j++) {
      currentPos[1] += 1;
    }
  }
  if (pos === 'S') {
    for (let j = 0; j < length; j++) {
      currentPos[1] -= 1;
    }
  }
  if (pos === 'E') {
    for (let j = 0; j < length; j++) {
      currentPos[0] += 1;
    }
  }
  if (pos === 'W') {
    for (let j = 0; j < length; j++) {
      currentPos[0] -= 1;
    }
  }
}

console.log(currentPos[0] + ' ' + currentPos[1]);