const fibonacci = function(num) {
  if(!Number(num) || Number(num) < 0 ) return 'OOPS'
  
  let a = 0;
  let b = 1;

  for (let i = 1; i < num; i ++){ 
    let c = a;
    a = b;
    b += c;
  }
  return b;
}

console.log(fibonacci("8"));

module.exports = fibonacci
