const add = function (summand1, summand2) {
  return summand1 + summand2;
};

const subtract = function (minuend, subtrahend) {
  return minuend - subtrahend;
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

const factorial = function (num, memo = {}) {
  if (num < 2) {
    return 1;
  }

  if (memo[num]) {
    return memo[num]
  } else {
    const prev = factorial(num - 1, memo);
    const result = prev * num;
    memo[num] = result;
    return result; 
  }
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
