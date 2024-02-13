const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = n; i >= 1; i--) {
    str = '';
    for (let j = 0; j < n - i; j++) {
        str += '  ';
    }
    for (let j = 0; j < 2 * i - 1; j++) {
        str += '* ';
    }
    console.log(str);
}