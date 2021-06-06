function isEven(num) {
  return num % 2 === 0;
}

function find(arr, func) {
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
console.log("Answer :", find([1, 3, 5, 4, 2], isEven));
