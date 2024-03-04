const n = Number(require('fs').readFileSync(0).toString().trim());
const twoDimmensionalArr = [];

for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
        arr.push(0);
    }
    twoDimmensionalArr.push(arr);
}

let current = 1;
let flag = true;

for (let i = n - 1; i >= 0; i--) {
    if (flag) {
        for (let j = n - 1; j >= 0; j--){
            twoDimmensionalArr[j][i] = current;
            current++;
        }
        flag = false;
        continue;
    }
    for (let j = 0; j < n; j++){
        twoDimmensionalArr[j][i] = current;
        current++;
    }
    flag = true;
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        str += twoDimmensionalArr[i][j] + ' ';
    }
    console.log(str);
}