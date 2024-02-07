function solution(num1, num2) {
    return num1 ** num2;
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b));