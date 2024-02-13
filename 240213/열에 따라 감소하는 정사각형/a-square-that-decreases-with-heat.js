function solution(num1) {
    for (let i = num1; i >= 1; i--) {
        let str = '';
        for (let j = num1; j >= 1; j--) {
            str += j + ' ';
        }
        console.log(str);
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

solution(n);