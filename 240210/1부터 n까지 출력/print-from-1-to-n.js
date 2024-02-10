const n = Number(require('fs').readFileSync(0).toString().trim());

let str = '';

for (let i = 1; i <= n; i++) {
    str += i + ' ';
}

console.log(str);