function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

function composedValue(f1, f2, x) {
  return f1(f2(x));
}
console.log("Composed Value: ", composedValue(square, double, 10));
