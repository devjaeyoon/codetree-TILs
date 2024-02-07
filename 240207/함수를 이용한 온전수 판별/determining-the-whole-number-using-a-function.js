function isOnJeonSu(num) {
    if (num % 2 === 0) {
        return false;
    }
    if (num % 10 === 5) {
        return false;
    }
    if (num % 3 === 0 && num % 9 !== 0) {
        return false;
    }
    return true;
}

function solution(start, end) {
    let cnt = 0;
    
    for (let i = start; i <= end; i++) {
        if (isOnJeonSu(i)) {
            cnt++;
        }
    }

    return cnt;
}

const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

console.log(solution(a, b));