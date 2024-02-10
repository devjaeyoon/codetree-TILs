function printStar(cnt) {
    for (let i = 0; i < cnt; i++) {
        console.log('*');
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

printStar(n);