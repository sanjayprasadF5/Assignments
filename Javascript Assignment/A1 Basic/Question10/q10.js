const arrStr = ["1", "3", "5", "9"];
function convert(str) {
  const nuevo = str.map((i) => Number(i));
  document.write(nuevo);
}

convert(arrStr);
