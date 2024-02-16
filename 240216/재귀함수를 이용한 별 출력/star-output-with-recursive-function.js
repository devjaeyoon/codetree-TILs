function printStar(n) {
    if (n === 0) {
        return;
    }

    printStar(n - 1);

    for (let i = 0; i < n; i++) {
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}

const N = Number(require('fs').readFileSync(0).toString().trim());

printStar(N);