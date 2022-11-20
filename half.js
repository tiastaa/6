function f(x) {
  return 2 * Math.log10(x) - x / 2 + 1;
  //Math.cos(2 / x) - 2 * Math.sin(1 / x) + 1 / x;
}
let a = 4;
let b = 5;
const e = 0.0001;

function half() {
  let k, x;
  if (f(a) * f(b) < 0) {
    k = 0;
    while (true) {
      x = (a + b) / 2;
      k += 1;
      if (Math.abs(f(x)) < e) break;
      if (f(a) * f(x) < 0) {
        b = x;
      } else {
        a = x;
      }
    }
    console.log(x, k);
  } else {
    console.log("does not work");
  }
}
half();
