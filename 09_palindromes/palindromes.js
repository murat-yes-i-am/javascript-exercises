const palindromes = function (string) {
  const digits = Array(10).fill(1).map((value, index) => index);
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  const isDigit = (char) => digits.includes(char);

  let start = 0;
  let end = string.length - 1;

  while (start < end) {

  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
