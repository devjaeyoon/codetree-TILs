const lines = require('fs').readFileSync(0).toString().trim().split('\n');
const numbers = lines[1].split(' ').map(Number);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        const tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }

    return arr;
}

selectionSort(numbers);

let str = '';

for (let number of numbers) {
    str += number + ' ';
}

console.log(str);