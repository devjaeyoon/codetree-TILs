const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

if (a > 0) {
    let str = '';

    for (let i = 0; i < b; i++) {
        str += a;
    }

    console.log(str);
}

if (a <= 0 && a >= -9) {
    console.log(0);
}