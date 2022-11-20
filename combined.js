function f(x) {
  return 2 * Math.log10(x) - x / 2 + 1;
}
function derivative(x) {
  return 2 / (x * Math.log2(x)) - 1 / 2;
}
let a = 4;
let b = 5;
const e = 0.001;

function combined() {
  let k = 0,
    x = a,
    xn,
    temp;
  while (true) {
    xn = x - f(x) / derivative(x);
    temp = x;
    x = xn;
    k += 1;
    if (Math.abs(xn - temp) < e) break;
  }
  console.log(xn, k);
}
combined();
