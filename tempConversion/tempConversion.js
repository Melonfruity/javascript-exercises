const ftoc = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * 50/9 ) / 10;
}

const ctof = function(celcius) {
  return Math.round(((celcius * 18 + 320))) / 10;
}

console.log(ftoc(100))

module.exports = {
  ftoc,
  ctof
}
