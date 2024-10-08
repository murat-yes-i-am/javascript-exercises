const palindromes = function (string) {
  const toLowerString = string.toLowerCase();
  const digits = Array(10).fill(1).map((value, index) => index);
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);
  const isLetterDigit = (char) => isLetter(char) || isDigit(char);
  const getChar = (index, string) => string[index];

  let left = 0;
  let right = string.length - 1;
  let leftChar = getChar(left, toLowerString);
  let rightChar = getChar(right, toLowerString);

  while (left < right) {
   
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
