function reverseString(string) {
    return string.split('').reverse().join('');
}

const palindromes = function (string) {
    const trimmedString = string.toLowerCase().replace(/[^0-9a-z]/gi, '');
    return trimmedString === reverseString(trimmedString);
};

// Do not edit below this line
module.exports = palindromes;
