const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);
const arr1 = [];
const arr2 = [];


for (let i = 1; i <= n; i++) {
    arr1.push(lines[i].split(' ').map(Number));
}

for (let i = n + 1; i <= 2 * n; i++) {
    arr2.push(lines[i].split(' ').map(Number));
}

const comparedArr = [];

for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
        arr.push(1);
    }
    comparedArr.push(arr);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            comparedArr[i][j] = 0;
        }
    }
}

for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < m; j++) {
        str += comparedArr[i][j] + ' ';
    }
    console.log(str);
}