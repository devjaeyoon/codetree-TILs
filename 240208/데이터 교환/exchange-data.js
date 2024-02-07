let a = 5;
let b = 6;
let c = 7;

const tmp1 = a;
const tmp2 = b;

a = c;
c = tmp2;
b = tmp1;

console.log(a);
console.log(b);
console.log(c);