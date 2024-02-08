const input = Number(require('fs').readFileSync(0).toString().trim());

let result = (input + 1.5).toString();
if (result.includes('.')) {
    result = result.substring(0, result.indexOf('.') + 3);
}

console.log(result);