const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);
const twoDimmensionalArr = [];

for (let i = 0; i < n; i++) {
  const arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(0);
  }
  twoDimmensionalArr.push(arr);
}

for (let i = 1; i <= m; i++) {
  const [row, col] = lines[i].split(' ').map(Number);

  twoDimmensionalArr[row - 1][col - 1] = row * col;
}

for (let i = 0; i < n; i++) {
  let str = '';
  for (let j = 0; j < n; j++) {
    str += twoDimmensionalArr[i][j] + ' ';
  }
  console.log(str);
}