// Lab_04_1
// Лукашевич Андрій
// Лабораторна робота № 4.1
// Цикли
// Варіант 12

const N = prompt('Введіть значення параметру N');

let i;
let S = 0;

for (let i = N; i <= 22; i++) {
  S += Math.sqrt(i ** 2 + N ** 2) / i;
}

console.log(S);

S = 0;

for (let i = 22; i >= N; i--) {
  S += Math.sqrt(i ** 2 + N ** 2) / i;
}

console.log(S);

S = 0;
i = N;

while (i <= 22) {
  S += Math.sqrt(i ** 2 + N ** 2) / i;
  i++;
}

console.log(S);

S = 0;
i = N;

do {
  if (i > 22) break;

  S += Math.sqrt(i ** 2 + N ** 2) / i;
  i++;
} while (i <= 22);

console.log(S);
