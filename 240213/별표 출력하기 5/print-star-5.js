function solution(num) {
    for (let i = num; i >= 1; i--) {
        let str = '*'.repeat(i);
        str += ' ';
        str = str.repeat(i);
        console.log(str);
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

solution(n);