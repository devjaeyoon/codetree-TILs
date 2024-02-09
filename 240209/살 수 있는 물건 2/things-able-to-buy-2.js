const money = Number(require('fs').readFileSync(0).toString().trim());

if (money >= 0 && money < 5000) {
  console.log('no');
}
if (money >= 500 && money < 1000) {
  console.log('pen');
}
if (money >= 1000 && money < 3000) {
  console.log('mask');
}
if (money >= 3000 && money <= 10000) {
  console.log('book');
}