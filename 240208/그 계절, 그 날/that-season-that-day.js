function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

function solution(year, month, day) {
  if (month === 2) {
    if (isLeapYear(year)) {
        if (day <= 29) {
            return 'Winter';
        }
        return -1;
    }
    if (day <= 28) {
        return 'Winter';
    }
    return -1;
  }
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    if (day <= 31) {
      if (month === 1) {
        return 'Winter';
      }
      if (month === 3) {
        return 'Spring';
      }
      if (month === 5) {
        return 'Spring';
      }
      if (month === 7) {
        return 'Summer';
      }
      if (month === 8) {
        return 'Summer';
      }
      if (month === 10) {
        return 'Fall';
      }
      if (month === 12) {
        return 'Winter';
      }
    }
    return -1;
  }
  if (day <= 30) {
    if (month === 4) {
        return 'Spring';
    }
    if (month === 6) {
        return 'Summer';
    }
    if (month === 9) {
        return 'Fall';
    }
    if (month === 11) {
        return 'Fall';
    }
  }
  return -1;
}

const [Y, M, D] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(solution(Y, M, D))