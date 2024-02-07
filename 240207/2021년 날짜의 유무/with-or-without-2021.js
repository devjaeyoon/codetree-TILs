function check2021Date(month, date) {
    if (month <= 12) {
            if (month === 1) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 2) {
        if (date <= 28) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 3) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 4) {
        if (date <= 30) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 5) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 6) {
        if (date <= 30) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 7) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 8) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 9) {
        if (date <= 30) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 10) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 11) {
        if (date <= 30) {
            return 'Yes'
        }
        return 'No';
    }
    if (month === 12) {
        if (date <= 31) {
            return 'Yes'
        }
        return 'No';
    }
    return 'No';
    }
}

const [M, D] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(check2021Date(M, D));