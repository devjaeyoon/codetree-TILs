const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);

if (m === 1) {
  console.log(2 * n);
} else {
  const arr = [];
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    const numbers = lines[i].split(' ');
    const obj = {};
    let lastNumStr = '0';

    for (let number of numbers) {
      if (number === lastNumStr) {
        obj[lastNumStr] += 1;
      } else {
        lastNumStr = number;
        if (Object.keys(obj).includes(number) && obj[number] > 1) {
          continue;
        }
        obj[lastNumStr] = 1;
      }
    }

    for (let value of Object.values(obj)) {
      if (value >= m) {
        cnt++;
      }
    }

    arr.push(numbers);
  }

  for (let i = 0; i < n; i++) {
    const numbers = [];
    const obj = {};
    let lastNumStr = '0';

    for (let j = 0; j < n; j++) {
      numbers.push(arr[j][i]);
    }

    for (let number of numbers) {
      if (number === lastNumStr) {
        obj[lastNumStr] += 1;
      } else {
        lastNumStr = number;
        if (obj[number] > 1) {
          continue;
        }
        obj[lastNumStr] = 1;
      }
    }

    for (let value of Object.values(obj)) {
      if (value >= m) {
        cnt++;
      }
    }
  }

  console.log(cnt);
}