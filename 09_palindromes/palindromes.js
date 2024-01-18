const palindromes = function (str) {
  const processed = str.replace(/[\p{P}\s]+/gu, '').toLowerCase();
  const reversed = processed.split('').reverse().join('');
  return processed === reversed;
};

// Do not edit below this line
module.exports = palindromes;
