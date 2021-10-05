const xp = +prompt('Введіть х початкове'); // x початкове
const xk = +prompt('Введіть х кінцеве'); // x кінцеве
const dx = +prompt('Введіть крок'); // крок обчислень

console.log('---------------------------');
console.log('|\tx\t|\ty\t|');
console.log('---------------------------');

for (let x = xp; x <= xk; x += dx) {
  const A = (2 + x) / x ** 2 + 1;

  let B;

  if (x < 0) {
    B = x ** 3 - 2 * x ** 4;
  } else if (x >= 0 && x <= 2) {
    B = (Math.abs(x) + Math.E ** x) ** 3;
  } else {
    B = 4 * Math.cos(x ** 2 - 2);
  }

  const y = A + B;

  console.log(`|\t${x.toFixed(2)}\t|\t${y.toFixed(3)}\t|`);
}
