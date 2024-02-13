function solution(num) {
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '* ';
        }
        console.log(str);
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

solution(n);