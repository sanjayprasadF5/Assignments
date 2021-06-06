function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
let f1 = compose(square, double);
console.log(f1(5));
console.log(f1(10));
let f2 = compose(double, square);
console.log(f2(5));
console.log(f2(10));
