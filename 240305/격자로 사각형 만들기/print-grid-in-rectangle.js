const n = Number(require('fs').readFileSync(0).toString().trim());
const twoDimmensionalArr = [];

for (let i = 0; i < n; i++) {
  const arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(1);
  }
  twoDimmensionalArr.push(arr);
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    twoDimmensionalArr[i][j] =
      twoDimmensionalArr[i - 1][j] +
      twoDimmensionalArr[i][j - 1] +
      twoDimmensionalArr[i - 1][j - 1];
  }
}

for (let i = 0; i < n; i++) {
  let str = '';
  for (let j = 0; j < n; j++) {
    str += twoDimmensionalArr[i][j] + ' ';
  }
  console.log(str);
}