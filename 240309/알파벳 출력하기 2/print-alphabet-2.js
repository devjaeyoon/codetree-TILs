const n = Number(require('fs').readFileSync(0).toString().trim());
let current = 65;

for (let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += '  ';
    }
    
    for (let j = 0; j < n - i; j++) {
        str += String.fromCharCode(current) + ' ';
        current++;
        if (current === 91) {
            current = 65;
        }
    }

    console.log(str);
}