const [x1, x2, x3, x4] = require('fs').readFileSync(0).toString().split(' ').map(Number);

let flag = false;

for (let i = x1; i <= Math.max(x2, x4); i++) {
    if (i >= x1 && i <= x2 && i >= x3 && i <= x4) {
        flag = true;
        break;
    }
}

console.log(flag ? 'intersecting' : 'nonintersecting');