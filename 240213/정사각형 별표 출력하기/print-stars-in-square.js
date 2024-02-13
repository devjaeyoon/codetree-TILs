function solution(num) {
    for (let i = 0; i < num; i++) {
        let str = '';
        for (let j = 0; j < num; j++) {
            str += '*';
        }
        console.log(str);
    }
}

const n = Number(require('fs').readFileSync(0).toString().trim());

solution(n);