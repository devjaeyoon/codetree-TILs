const n = Number(require('fs').readFileSync(0).toString().trim());

for (let i = 1; i <= n; i++) {
  let end = n + 1 - i;
  let str = '';
  for (let j = 1; j <= end; j++) {
    str += i + ' * ' + j + ' = ' + i * j + ' / ';
  }

  console.log(str.slice(0, str.length - 2));
}