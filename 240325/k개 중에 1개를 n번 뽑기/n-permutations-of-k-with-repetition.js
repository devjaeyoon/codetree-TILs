const [K, N] = require('fs').readFileSync(0).toString().split(' ').map(Number);

function generatePermutationsWithRepetition(n, k) {
  if (K === 1) {
    return [1, 1];
  }

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