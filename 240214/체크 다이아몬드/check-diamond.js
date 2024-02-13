const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
    let str = '';

    for (let j = n - i; j > 0; j--) {
        str += ' ';
    }

    for (let j = 1; j <= i; j++) {
        str += '* ';
    }

    console.log(str);
}

for (let i = 1; i < n; i++) {
    let str = '';

    for (let j = 1; j <= i; j++) {
        str += ' ';
    }

    for (let j = n - i; j > 0; j--) {
        str += '* ';
    }

    console.log(str);
}