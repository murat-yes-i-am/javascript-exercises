const palindromes = function (string) {
  const digits = Array(10).fill(1).map((value, index) => index);
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);
  const isLetterDigit = (char) => isLetter(char) || isDigit(char);
  const getLowerChar = (index, string) => string[index].toLowerCase();

  let left = 0;
  let right = string.length - 1;
  let leftChar = getLowerChar(left, string);
  let rightChar = getLowerChar(right, string);

  while (left < right) {
   
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
