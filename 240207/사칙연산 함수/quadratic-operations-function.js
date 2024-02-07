function solution(num1, op, num2) {
    let answer = ''

    if (op === '+') {
        answer += `${num1} ${op} ${num2} = ${Number(num1) + Number(num2)}`;
    }
    if (op === '-') {
        answer += `${num1} ${op} ${num2} = ${Number(num1) - Number(num2)}`;
    }
    if (op === '/') {
        answer += `${num1} ${op} ${num2} = ${Math.trunc(Number(num1) / Number(num2))}`;
    }
    if (op === '*') {
        answer += `${num1} ${op} ${num2} = ${Number(num1) * Number(num2)}`;
    }

    return answer !== '' ? answer : false;
}

const fs = require('fs');
const [a, o, c] = fs.readFileSync(0).toString().trim().split(' ');

console.log(solution(a, o, c))