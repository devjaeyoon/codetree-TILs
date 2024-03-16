const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(lines[0]);
let jenga = [];

for (let i = n; i >= 1; i--) {
  jenga.push(Number(lines[i]));
}

for (let i = n + 1; i <= n + 2; i++) {
  const [start, end] = lines[i].split(' ').map(Number);

  const answer = [];
  answer.push(...jenga.slice(0, jenga.length - end));
  answer.push(...jenga.slice(jenga.length - start + 1, jenga.length));

  jenga = answer;
}

console.log(jenga.length);

for (let i = jenga.length - 1; i >= 0; i--) {
  console.log(jenga[i]);
}