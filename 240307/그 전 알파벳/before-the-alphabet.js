const input = require('fs').readFileSync(0).toString().trim();
console.log(String.fromCharCode(input.charCodeAt(0) - 1));