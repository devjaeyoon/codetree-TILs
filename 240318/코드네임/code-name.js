const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const obj = {};

for (let line of lines) {
  const [codeName, score] = line.split(' ');
  obj[codeName] = Number(score);
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

const min = Math.min(...Object.values(obj));

let str = '';

str += getKeyByValue(obj, min) + ' ';
str += min;

console.log(str);