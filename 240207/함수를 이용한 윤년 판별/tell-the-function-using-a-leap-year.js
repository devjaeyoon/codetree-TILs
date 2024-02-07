function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

console.log(isLeapYear(input));