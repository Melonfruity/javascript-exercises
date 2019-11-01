const caesar = function(str, shift) {
  const s = [...str].map((c, index) => {
    const charCode = str.charCodeAt(index);
    const newCharCode = str.charCodeAt(index) + (shift % 26);

    if(charCode <= 90 && charCode > 64){
      return newCharCode > 90 ? String.fromCharCode(newCharCode - 26) : String.fromCharCode(newCharCode);
    } else if (charCode <= 122 && charCode > 96) {
      return newCharCode > 122 ? String.fromCharCode(newCharCode - 26) : String.fromCharCode(newCharCode);
    } else {
      return c;
    }
  });
}
module.exports = caesar
