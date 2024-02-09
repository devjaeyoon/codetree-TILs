const n = Number(require('fs').readFileSync(0).toString().trim());

console.log(n * n);

if (n < 5) {
  console.log('tiny');
}