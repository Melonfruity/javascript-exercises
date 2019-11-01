const caesar = function(str, shift) {
  const s = [...str].map((c, index) => {
    const charCode = str.charCodeAt(index);
    const newCharCode = str.charCodeAt(index) + (shift % 26);

    // 65, 90 | 97, 122
    if(charCode <= 90 && charCode >= 65){
      if(newCharCode > 90 || newCharCode < 65){
        return newCharCode > 90 ? String.fromCharCode(newCharCode - 26) : String.fromCharCode(newCharCode + 26);
      } else {
        return String.fromCharCode(newCharCode);
      }
    } else if(charCode <= 122 && charCode >= 97){
      if(newCharCode > 122 || newCharCode < 97){
        return newCharCode > 122 ? String.fromCharCode(newCharCode - 26) : String.fromCharCode(newCharCode + 26);
      } else {
        return String.fromCharCode(newCharCode);
      }
    } else 
      return c;
  });

  return s.join('');
}

module.exports = caesar
