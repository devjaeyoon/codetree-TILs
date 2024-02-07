function solution(num1, num2, num3) {
    let min = num1;

    if (min <= num2 && min <= num3) {
        return min;
    }
    if (min >= num2 && min <= num3) {
        return num2;
    }
    if (min <= num2 && min >= num3) {
        return num3;
    }
}

const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b, c));