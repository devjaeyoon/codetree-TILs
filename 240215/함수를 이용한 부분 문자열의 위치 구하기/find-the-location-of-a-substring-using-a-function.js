const lines = require('fs').readFileSync(0).toString().trim().split('\n');


console.log(lines[0].indexOf(lines[1]));