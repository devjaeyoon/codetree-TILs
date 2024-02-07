function solution(num1, num2, num3) {
    if (num1 <= num2) {
        if (num1 <= num3) {
            return num1;
        }
        return num3;
    }
    if (num1 <= num3) {
        if (num1 <= num2) {
            return num1;
        }
        return num2;
    }
    if (num2 <= num3) {
        if (num2 <= num1) {
            return num2;
        }
        return num1;
    }
    if (num2 <= num1) {
        if (num2 <= num3) {
            return num2;
        }
        return num3;
    }
    if (num3 <= num2) {
        if (num3 <= num1) {
            return num3;
        }
        return num1;
    }
    if (num3 <= num1) {
        if (num3 <= num2) {
            return num3;
        }
        return num2;
    }
}

const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b, c));