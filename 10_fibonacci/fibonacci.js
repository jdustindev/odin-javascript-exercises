const fibonacci = function(index) {
    const indexNumber = Number(index);
    console.log(indexNumber);
    if (indexNumber < 1) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    let current = 1;
    for (let i = 1; i < indexNumber; i++) {
        current = a + b;
        a = b;
        b = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
