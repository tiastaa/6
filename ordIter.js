function f(x) {
  return 2 * Math.log10(x) - x / 2 + 1;

  //Math.cos(2 / x) - 2 * Math.sin(1 / x) + 1 / x;
}
let a = 4;
let b = 5;
const e = 0.001;
tau = 0.01;

function ordinaryIteration() {
  let x0 = a,
    k = 0,
    xk,
    temp;
  while (true) {
    console.log(k);
    xk = x0 + f(x0);
    temp = x0;
    x0 = xk;
    k += 1;
    if (Math.abs(xk - temp) < e) break;
    x = b;
  }
  console.log(xk, k);
}
ordinaryIteration();
//console.log(f(a));

// def simple_iteration(f):
//     x_0 = ROOT_RANGE[0]
//     i = 0
//     while True:
//         x_k = x_0 + TAU * f(x_0)
//         temp = x_0
//         x_0 = x_k
//         i += 1
//         print(f'Ітерація [{i}]: xi = {x_k}')
//         if abs(x_k - temp) < EPSILON:
//             break
//     return x_k
