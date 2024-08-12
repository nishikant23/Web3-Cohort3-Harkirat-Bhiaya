function asciiToBytes(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i);
  }
  return arr;
}

function main() {
 
  //Ascii to Bytes
  let str = "Nishikant";
  console.log(asciiToBytes(str));
}
main();