const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const [firstAge, firstSex] = lines[0].split(' ');
const [secondAge, secondSex] = lines[1].split(' ');

console.log(firstAge >= 19 && firstSex === 'M' || secondAge >= 19 && secondSex === 'M' ? 1 : 0);