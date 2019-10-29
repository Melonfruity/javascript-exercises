const sumAll = function(start, end) {
  
  if(typeof start !== 'number' || typeof end !== 'number'){
    return 'ERROR'
  } else if(start < 0 || end < 0){
    return 'ERROR'
  }

  let sum = 0;

  for(let i = (start < end ? start : end) ; i <= (start > end ? start : end); i ++){
    sum = sum + i;
  }

  return sum;
  
  /*
  if((start+1) !== end){
    return sumAll(start, end) + sumAll(start+1, end);
  }

  return 
  */
} 

module.exports = sumAll
