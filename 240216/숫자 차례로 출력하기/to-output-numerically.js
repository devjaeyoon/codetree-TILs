function printNumber(n) {
    let asc = '';

    for (let i = 1; i <= n; i++) {
        asc += i + ' ';
    }

    console.log(asc);

    let desc = '';

    for (let i = n; i >= 1; i--) {
        desc += i + ' ';
    }

    console.log(desc);
}

const N = Number(require('fs').readFileSync(0).toString().trim());

printNumber(N);