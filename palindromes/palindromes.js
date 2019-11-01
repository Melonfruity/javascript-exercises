const palindromes = function(str) {
  const newStr = str.toLowerCase().replace(/\s/g, '').replace(/\W/g, '');
  return newStr === newStr.split('').reverse().join('');
}

module.exports = palindromes
