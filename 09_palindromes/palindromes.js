const palindromes = function (string) {
  const toLowerString = string.toLowerCase();
  const digits = '0123456789';
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);
  const isLetterDigit = (char) => isLetter(char) || isDigit(char);
  const getChar = (index, string) => string[index];

  let left = 0;
  let right = string.length - 1;
  let leftChar, rightChar;

  while (left < right) {
    leftChar = getChar(left, toLowerString);
    rightChar = getChar(right, toLowerString);

   if (isLetterDigit(leftChar) && isLetterDigit(rightChar)) {
    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
   }

   if (!isLetterDigit(leftChar)) {
    left++;
   }

   if (!isLetterDigit(rightChar)) {
    right--;
   }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
