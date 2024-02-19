const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
const numbers = lines[1].split(' ').map(Number);

function bubbleSort(arr) {
  const len = n;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = false;
      }
    }
  }

  return arr;
}

bubbleSort(numbers);

let answer = '';

for (let number of numbers) {
  answer += number + ' ';
}

console.log(answer);