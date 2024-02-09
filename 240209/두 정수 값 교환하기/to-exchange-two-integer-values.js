function swap(num1, num2) {
    [num1, num2] = [num2, num1];
    console.log(num1, num2);
}

const [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

swap(n, m);