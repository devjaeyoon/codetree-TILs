function printStar(num) {
    if (num === 0) {
        return;
    }

    for (let i = 0; i < num; i++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');

    printStar(num - 1);

    for (let i = 0; i < num; i++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
}

const n = Number(require('fs').readFileSync(0).toString().trim());

printStar(n);