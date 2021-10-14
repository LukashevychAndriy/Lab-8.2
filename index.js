const xp = +prompt('Введіть значення параметру хp'); // Запрошуємо ввід параметру x початкового
const xk = +prompt('Введіть значення параметру хk'); // Запрошуємо ввід параметру x кінцевого
const dx = +prompt('Введіть значення параметру dx'); // Запрошуємо ввід параметру кроку
const eps = +prompt('Введіть значення параметру eps'); // Запрошуємо ввід параметру точності

console.log('|\tx\t\t|\tarctg(x)\t\t|\t\tS\t\t\t|\tn\t|');

for (let x = xp; x <= xk && x < -1; x += dx) {
  
  let S = 0;
  let addition;
  let n = 0;

  do {
    addition = Math.pow(-1, n + 1) / ((2 * n + 1) * Math.pow(x, 2 * n + 1));

    S += addition;

    n++;
  } while (Math.abs(addition) >= eps);

  let result = -Math.PI / 2 + S;

  console.log(`|\t${x.toFixed(2)}\t|\t${Math.atan(x).toFixed(10)}\t|\t${result.toFixed(10)}\t|\t${n}\t|`);
}
