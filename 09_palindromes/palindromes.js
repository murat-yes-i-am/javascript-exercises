const palindromes = function (string) {
  const digits = Array(10).fill(1).map((value, index) => index);
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);
  const isLetterDigit = (char) => isLetter(char) || isDigit(char);

  let left = 0;
  let right = string.length - 1;

  while (left < right) {

  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
