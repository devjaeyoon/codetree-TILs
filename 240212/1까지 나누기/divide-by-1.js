let n = Number(require('fs').readFileSync(0).toString().trim());

let divisor = 1;
let cnt = 0;

while (n > 1) {
    n = Math.floor(n / divisor);
    divisor++;
    cnt++;
}

console.log(cnt);