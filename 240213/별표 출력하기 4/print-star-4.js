const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n - i; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 2; i <= n; i++) {
    str = "";
    for (let j = 0; j < i; j++) {
        str += "* ";
    }
    console.log(str);
}