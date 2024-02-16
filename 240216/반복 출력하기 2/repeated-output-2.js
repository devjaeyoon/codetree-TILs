function printHelloWord(n) {
    if (n === 0) {
        return;
    }

    printHelloWord(n - 1);
    console.log('HelloWorld');
}

const N = Number(require('fs').readFileSync(0).toString().trim());

printHelloWord(N);