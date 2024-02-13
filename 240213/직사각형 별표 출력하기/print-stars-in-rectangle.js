function solution(num1, num2) {
    for (let i = 0; i < num1; i++) {
        let str = '';
        for (let j = 0; j < num2; j++) {
            str += '* ';
        }
        console.log(str);
    }
}

const [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

solution(n, m);