function printStar(num) {
  for (let i = 1; i <= num; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
    console.log();
  }
  for (let i = num - 1; i >= 1; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
    console.log();
  }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

printStar(n);