function solution (start, end) {
    let cnt = 0;

    for (let i = start; i <= end; i++) {
        if (`${i}`.includes(3) || `${i}`.includes(6) || `${i}`.includes(9) || i % 3 === 0) {
            cnt++;
        }
    }

    return cnt;
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b));