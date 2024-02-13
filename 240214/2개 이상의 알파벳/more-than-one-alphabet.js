const A = require('fs').readFileSync(0).toString().trim();

function solution(string) {
    const alphabets = [];

    for (let i = 0; i < string.length; i++) {
        if (alphabets.length === 2) {
            return true;
        }
        if (alphabets.includes(string[i])) {
            continue;
        }
        alphabets.push(string[i]);
    }

    return false;
}

console.log(solution(A) ? 'Yes' : 'No');