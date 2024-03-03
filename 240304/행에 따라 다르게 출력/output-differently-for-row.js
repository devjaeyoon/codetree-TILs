const n = Number(require('fs').readFileSync(0).toString().trim());

let cnt = 0;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (i % 2 === 0) {
            cnt += 1;
        }
        if (i % 2 === 1) {
            cnt += 2;
        }
        str += cnt + ' ';
    }
    console.log(str);
}