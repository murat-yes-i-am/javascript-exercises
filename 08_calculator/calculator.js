const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (args) {
  return args.reduce((acc, num) => acc + num, 0);
};

const multiply = function (args) {
  return args.reduce((acc, num) => acc * num, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function () {

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
