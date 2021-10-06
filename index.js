const R = +prompt('R = '); // Запрошуємо ввід значення вхідного параметру R
const xp = +prompt('Введіть х початкове'); // Запрошуємо ввід x початкового
const xk = +prompt('Введіть х кінцеве'); // Запрошуємо ввід х кінцевого
const dx = +prompt('Введіть крок'); // Запрошуємо ввід кроку

console.log('---------------------------');
console.log('|\tx\t|\ty\t|');
console.log('---------------------------');

let y; // Результат обчислень;

for (let x = xp; x <= xk; x += dx) {
  if (x <= -6) {
    y = R;
  } else if (x > -6 && x <= -R) {
    y = (x + R) / (-R + 6); 
  } else if (x > -R && x <= 0) {
    y = R - Math.sqrt(R ** 2 - (x + R) ** 2);
  } else if (x > 0 && x <= R) {
    y = Math.sqrt(R ** 2 - x ** 2);
  } else if (x > R) {
    y = -x + R;
  }

  console.log(`|\t${x.toFixed(2)}\t|\t${y.toFixed(3)}\t|`);
}
