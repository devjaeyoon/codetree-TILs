function printNumberSquare(N) {
    let now = 1;

    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            if (now > 9) {
                now = 1;
            }
            str += now + ' ';
            now++;
        }
        console.log(str);
    }
}

const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

printNumberSquare(input)