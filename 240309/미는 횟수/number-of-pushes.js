const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const B = lines[1];
let A = lines[0];
let cnt = 0;

while (A !== B && cnt < A.length) {
    A = A.split('');
    A.push(A.shift());
    A = A.join('');
    cnt += 1;
}

console.log(cnt <= A.length ? cnt : -1);