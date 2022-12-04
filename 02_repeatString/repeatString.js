const repeatString = function(string, numTimes) {
  if (numTimes < 0) {
    return 'ERROR';
  }
  let newString = "";
  for (let i=0; i<numTimes; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
