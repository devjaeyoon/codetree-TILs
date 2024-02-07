function isSubSequence(arr1Length, arr2Length, arr1, arr2) {
    let indexArr1 = 0;
    let indexArr2 = 0;

    while (indexArr1 < arr1Length && indexArr2 < arr2Length) {
        if (arr1[indexArr1] === arr2[indexArr2]) {
            indexArr1++;
            indexArr2++;
            continue;
        }
        indexArr1++;
    }

    return indexArr2 === arr2Length ? 'Yes' : 'No';
}

const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = lines[0].split(' ').map(Number);
const arrA = lines[1].split(' ').map(Number);
const arrB = lines[2].split(' ').map(Number);

console.log(isSubSequence(A, B, arrA, arrB));