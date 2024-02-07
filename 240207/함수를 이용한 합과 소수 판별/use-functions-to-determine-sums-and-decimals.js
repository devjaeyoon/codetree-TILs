function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(start, end) {
    let cnt = 0;

    for (let i = start; i <= end; i++) {
        if(isPrime(i)) {
            let digit = 0;

            for (let j = 0; j < String(i).length; j++) {
                digit += Number(String(i)[j]);
            }
            
            if (digit % 2 === 0) {
                cnt++;
            }
        }
    }

    return cnt;
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b));