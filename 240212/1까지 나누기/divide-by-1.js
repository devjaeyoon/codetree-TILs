let n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 0;
let i = 1;

while (n >= 1) {
    n = Math.floor(n / i);
    i++;
    cnt++;
}

console.log(cnt);