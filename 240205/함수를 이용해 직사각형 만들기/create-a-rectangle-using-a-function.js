function printRect(n, m) {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < m; j++) {
            str += '*';
        }
        console.log(str);
    }
}

const fs = require('fs');
const [rowNum, colNum] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

printRect(rowNum, colNum)