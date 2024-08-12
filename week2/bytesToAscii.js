function bytesToAscii(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
}

function main() {
  let arr = [72, 108, 65, 72, 88, 23];
  let asciiVal = bytesToAscii(arr);
  console.log(asciiVal);
}
main();
