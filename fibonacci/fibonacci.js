const fibonacci = function(num) {
  if(Number(num) < 0 ){
    return 'OOPS';
  }
  
  let a = 0;
  let b = 1;

  for (let i = 1; i < num; i ++){ 
    let c = a;
    a = b;
    b += c;
  }
  return b;
  
  /* if (num <= 1){
    return num;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
 */
}

console.log(fibonacci(2));

module.exports = fibonacci
