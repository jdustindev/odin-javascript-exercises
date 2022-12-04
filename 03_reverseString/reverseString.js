const reverseString = function(string) {
  const splitString = string.split('');
  const reversedString = splitString.reverse();
  return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
