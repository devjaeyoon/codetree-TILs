let n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i < n; i++) {
    n = Math.floor(n / i);
    cnt++;
    if (n < 1) break;
}

console.log(cnt);