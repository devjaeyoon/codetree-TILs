function solution(N) {
    return Math.floor(N * (N + 1) / 20);
}

const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(solution(input))