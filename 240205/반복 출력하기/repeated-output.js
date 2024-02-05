const fs = require('fs');
let rowNum = Number(fs.readFileSync(0).toString().trim());

function printNLines(N) {
    for (let i = 0; i < N; i++) {
        console.log('12345^&*()_');
    }
}

printNLines(rowNum);