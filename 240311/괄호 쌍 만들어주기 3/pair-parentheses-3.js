const input = require('fs').readFileSync(0).toString().trim();
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === ')') {
        continue;
    }

    for (let j = i + 1; j < input.length; j++) {
        if (input[j] === ')') {
            cnt += 1;
        }
    }
}

console.log(cnt);