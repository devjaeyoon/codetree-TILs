function solution(stringNum1, stringNum2) {
    if (Number(stringNum2) % 2 === 0 && ((Number(stringNum1) + Number(stringNum2)) % 5) === 0) {
        return 'Yes';
    }
    return 'No';
}

const fs = require('fs');
const [units, tens] = fs.readFileSync(0).toString().trim();

console.log(solution(units, tens));