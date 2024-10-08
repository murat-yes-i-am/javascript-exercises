const palindromes = function () {
  const digits = Array(10).fill(1).map((value, index) => index);
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);
};

// Do not edit below this line
module.exports = palindromes;
