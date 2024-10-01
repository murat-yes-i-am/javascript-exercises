const isDivisible = (divisor) => (num) => num % divisor === 0;
const isDivisibleBy4 = isDivisible(4);
const isDivisibleBy100 = isDivisible(100);
const isDivisibleBy400 = isDivisible(400);

const leapYears = function(year) {
  return (isDivisibleBy4(year) && !isDivisibleBy100(year)) || isDivisibleBy400(year);
};

// Do not edit below this line
module.exports = leapYears;
