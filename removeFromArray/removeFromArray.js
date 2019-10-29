const removeFromArray = function() {
  // const args = Array.from(arguments);
  const args = [...arguments];
  const rem = args.slice(1);

  return args[0].filter(num => !rem.includes(num))
}

module.exports = removeFromArray
