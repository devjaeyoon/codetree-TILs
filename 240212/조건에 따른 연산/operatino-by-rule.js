let n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 0;

while (n < 1000) {
    cnt++;
    if (n % 2 === 0) {
        n = n * 3 + 1;
        continue;
    }
    if (n % 2 === 1) {
        n = n * 2 + 2;
    }
}

console.log(cnt);