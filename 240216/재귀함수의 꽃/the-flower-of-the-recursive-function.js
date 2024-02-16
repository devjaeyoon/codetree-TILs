let str = '';

function printNumber(n) {
    if (n === 0) {
        return;
    }

    str += n + ' ';

    printNumber(n - 1);

    str += n + ' ';
}

const N = Number(require('fs').readFileSync(0).toString().trim());

printNumber(N);

console.log(str);