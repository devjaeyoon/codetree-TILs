const n = Number(require('fs').readFileSync(0).toString().trim());

let now = 9;

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (now === 0) {
            now = 9;
        }
        str += now;
        now--;
    }
    console.log(str);
}