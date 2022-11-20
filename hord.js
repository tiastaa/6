function f(x) {
  return 2 * Math.log10(x) - x / 2 + 1;
}
let a = 4;
let b = 5;
const e = 0.001;

function hord() {
  let k = 0,
    bn,
    temp;
  while (true) {
    bn = b - ((a - b) / (f(a) - f(b))) * f(b);
    temp = b;
    b = bn;
    k += 1;
    if (Math.abs(bn - temp) < e) break;
  }
  console.log(bn, k);
}
hord();
