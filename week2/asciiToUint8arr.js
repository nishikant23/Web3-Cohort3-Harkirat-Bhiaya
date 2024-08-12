function asciiTouint8arr(asciiVal) {
  let arr = new Uint8Array(asciiVal.length);
  for (let i = 0; i < asciiVal.length; i++) {
      arr[i] = asciiVal.charCodeAt(i);
  }
  return arr;
}

function main() {

  //Ascii to uint8arr
  let asciiVal = "Naruto";
  console.log(asciiTouint8arr(asciiVal));
}
main();