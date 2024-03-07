const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const A = lines[0];
const B = lines[1];
const subStrings = [];

for (let i = 0; i < A.length - 1; i++) {
    subStrings.push(A.slice(i, i + 2));
}

let cnt = 0;

for (let i = 0; i < subStrings.length; i++) {
    if (subStrings[i] === B) {
        cnt++;
    }
}

console.log(cnt);