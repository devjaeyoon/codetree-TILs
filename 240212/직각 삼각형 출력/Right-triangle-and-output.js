function printRightTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i * 2 - 1; j++) {
            str += '*';
        }
        console.log(str);
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

printRightTriangle(n);