let n = Number(require('fs').readFileSync(0).toString().trim());
let cnt = 0;

while (n !== 0) {
  if (n % 5 === 0) {
    cnt += n / 5;
    break;
  }

  if (n > 2) {
    cnt++;
    n -= 2;
  }

  if (n <= 1) {
    cnt = -1;
    break;
  }
}

console.log(cnt === -1 ? -1 : cnt);