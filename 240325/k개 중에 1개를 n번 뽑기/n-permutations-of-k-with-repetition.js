const [K, N] = require('fs').readFileSync(0).toString().split(' ').map(Number);

if (N === 1) {
  for (let i = 1; i <= K; i++) {
    console.log(i);
  }
}

if (N > 1) {
    function generatePermutationsWithRepetition(n, k) {
  let result = [];
  let path = [];

  function backtrack() {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = 1; i <= n; i++) {
      path.push(i);
      backtrack();
      path.pop();
    }
  }

  backtrack();
  return result;
}

const result = generatePermutationsWithRepetition(K, N);

for (let i = 0; i < result.length; i++) {
  console.log(result[i][0] + ' ' + result[i][1]);
}
}