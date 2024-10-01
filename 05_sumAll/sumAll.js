const sumAll = function(start, end) {
  let sum = 0;

  sum = ((start + end) / 2) * (end - start + 1); // Gauss sum

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
