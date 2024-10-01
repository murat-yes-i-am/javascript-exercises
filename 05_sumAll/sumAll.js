const sumAll = function (num1, num2) {
  if (!isInteger(num1) || !isInteger(num2) || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  let sum = 0;

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  sum = ((start + end) / 2) * (end - start + 1); // Gauss sum

  return sum;
};

const isInteger = (num) => {
  return typeof num === 'number' && Math.floor(num) === num;
}

// Do not edit below this line
module.exports = sumAll;
