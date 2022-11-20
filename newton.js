function f(x) {
  return Math.cos(2 / x) - 2 * Math.sin(1 / x) + 1 / x;
}
function f1(x) {
  return (
    (2 * Math.sin(2 / x)) / x ** 2 + (2 * Math.cos(1 / x)) / x ** 2 - 1 / x ** 2
  );
}
function f2(x) {
  return (
    2 / x ** 3 -
    (4 * Math.cos(2 / x)) / x ** 4 -
    (4 * Math.cos(1 / x)) / x ** 3 +
    (2 * Math.sin(1 / x)) / x ** 4
  );
}
let a = 1.8;
let b = 2;
const e = 0.0001;

function newton() {
  let x, k;
  if (f(a) * f2(a) > 0) {
    x = a;
  } else if (f(b) * f2(b) > 0) {
    x = b;
  } else {
    x = -1 * 10 ** 10;
  }
  if (x > -1 * 10 ** 10) {
    k = 0;
    while (true) {
      x = x - f(x) / f1(x);
      k += 1;
      if (Math.abs(f(x)) < e) break;
    }
    console.log(x, k);
  }
}
newton();
