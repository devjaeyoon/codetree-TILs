function solution(num1, num2) {
  if (num1 > num2) {
    console.log(num1 * 2, num2 + 10);
  }
  if (num1 < num2) {
    console.log(num1 + 10, num2 * 2);
  }
}

const [a, b] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

solution(a, b);