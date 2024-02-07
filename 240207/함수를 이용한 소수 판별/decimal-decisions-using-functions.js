function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function solution (start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b));