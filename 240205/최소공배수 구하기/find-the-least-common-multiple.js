const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function getLCM(num1, num2) {
    let lcm = 1;

    while (true) {
        if ((lcm % num1) === 0 && (lcm % num2) === 0) {
            break;
        }
        lcm++;
    }

    return lcm;
}

console.log(getLCM(n, m));