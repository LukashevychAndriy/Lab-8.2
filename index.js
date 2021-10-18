const xp = +prompt('Введіть значення параметру хp'); // Запрошуємо ввід параметру x початкового
const xk = +prompt('Введіть значення параметру хk'); // Запрошуємо ввід параметру x кінцевого
const dx = +prompt('Введіть значення параметру dx'); // Запрошуємо ввід параметру кроку
const eps = +prompt('Введіть значення параметру eps'); // Запрошуємо ввід параметру точності

console.log('|\tx\t\t|\tarctg(x)\t\t|\tS\t\t\t\t|\tn\t|');

for (let x = xp; x <= xk && x < -1; x += dx) {
  
  let a = -1 / x;
  let S = a;
  let n = 0;

  do {
    n++;

    let R = (1 - 2 * n) / (2 * n * x * x + x * x);
    
    a *= R;
    S += a;
  } while (Math.abs(a) >= eps);

  let result = -Math.PI / 2 + S;

  console.log(`|\t${x.toFixed(2)}\t|\t${Math.atan(x).toFixed(10)}\t|\t${result.toFixed(10)}\t|\t${n}\t|`);
}
