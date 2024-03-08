const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = n; i >= 1; i--) {
    let current = i;
    let str = '';

    while (current <= n) {
        str += current + ' ';
        current++;
    }

    console.log(str);
}