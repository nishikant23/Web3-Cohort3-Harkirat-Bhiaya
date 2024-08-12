function uint8arrToAscii(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
}


function main() {
  //Uint8Array to Ascii

  let uint8arr = new Uint8Array([72, 65, 65, 72, 108]);
  console.log(uint8arrToAscii(uint8arr));
}
main();