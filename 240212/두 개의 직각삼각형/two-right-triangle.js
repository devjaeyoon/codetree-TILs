function solution(num1) {
  for (let i = 0; i < num1; i++) {
    let str = '*'.repeat(num1 - i);
    str += ' '.repeat(2 * i);
    str += '*'.repeat(num1 - i);
    console.log(str);
  }
}
const n = Number(require('fs').readFileSync(0).toString().trim());

solution(n);