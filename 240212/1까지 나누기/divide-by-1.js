let n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 1;

for (let i = 1; i < n; i++) {
    if (n < 1) break;
    n = Math.floor(n / i);
    cnt++;
}

console.log(cnt);