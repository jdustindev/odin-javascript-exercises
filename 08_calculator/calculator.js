const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const sum = array.reduce(((sum, x) => sum + x), 0);
  return sum;
};

const multiply = function(array) {
  const total = array.reduce((total, x) => total * x, 1);
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
