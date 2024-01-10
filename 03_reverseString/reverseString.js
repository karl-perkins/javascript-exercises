const reverseString = function(string) {

  let charArr = string.split('');
  
  charArr.reverse(); // Could also use toReversed() and pass return value into a variable

  const reversedString = charArr.join('');

  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
