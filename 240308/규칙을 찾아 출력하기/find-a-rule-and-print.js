const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    let str = '';
    if (i === 0) {
        for (let j = 0; j < n; j++) {
            str += '* ';
        }
        console.log(str);
    } else {
        for (let j = 0; j < i; j++) {
            str += '* ';
        }
        for (let j = 0; j < n - i - 1; j++) {
            str += '  ';
        }
        str += '* ';
        console.log(str);
    }
}