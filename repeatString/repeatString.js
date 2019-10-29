const repeatString = function(str, repeat) {
  
  if(repeat < 0){
    return 'ERROR';
  }
  
  let newStr = '';
  
  for(let i = 0; i < repeat; i++ ){
    newStr += str;
  }

  return newStr;
}

module.exports = repeatString
