function getGCD(num1, num2) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(getGCD(n, m));