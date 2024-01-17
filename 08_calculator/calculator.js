const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, cur) => sum + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, cur) => product * cur); // Don't provide an initial value
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) return 1;
	let product = n;
  // Factorial formula: n! = n * (n-1) * ... * 1
  for (let i = 1; i < n; i++) {
    product *= (n - i);
  }
  return product;
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
