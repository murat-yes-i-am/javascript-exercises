const fibonacci = function (number, memo = [0, 1, 1]) {
  const parsedNumber = parseInt(number);

  if (isNaN(parsedNumber) || parsedNumber < 0) {
    return 'OOPS';
  }

  if (parsedNumber in memo) {
    return memo[parsedNumber];
  }

  const fibonacciNumber = fibonacci(parsedNumber - 1, memo) + fibonacci(parsedNumber - 2, memo);

  memo.push(fibonacciNumber);

  return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
