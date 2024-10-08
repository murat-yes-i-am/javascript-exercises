const fibonacci = function (number, memo = [0, 1, 1]) {
  if (number < 0 || parseInt(number) !== number) {
    return 'OOPS';
  }

  if (number in memo) {
    return memo[number];
  }

  const fibonacciNumber = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);

  memo.push(fibonacciNumber);

  return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
