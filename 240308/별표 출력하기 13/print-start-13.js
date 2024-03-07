const n = Number(require('fs').readFileSync(0).toString().trim());

let start = n;
let end = 1;

for (let i = 0; i < 2 * n; i++) {
    let str = '';
    if (i % 2 === 0) {
        for (let j = 0; j < start; j++) {
            str += '* ';
        }
        start--;
        console.log(str);
    }
    if (i % 2 === 1) {
        for (let j = 0; j < end; j++) {
            str += '* ';
        }
        end++;
        console.log(str);
    }
}