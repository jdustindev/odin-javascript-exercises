const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }

    let sum = 0;
    let startNum = a;
    let endNum = b;
    if (a > b) {
        startNum = b;
        endNum = a;
    }
    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
