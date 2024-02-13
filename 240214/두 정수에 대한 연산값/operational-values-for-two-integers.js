const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

function solution(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + 25, num2 * 2);
    }
    if (num1 < num2) {
        console.log(num1 * 2, num2 + 25);
    }
}

solution(a, b);