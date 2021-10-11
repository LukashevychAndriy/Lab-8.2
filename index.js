let P = 1;
let n = 1;

for (let n = 1; n <= 20; n++) {
  let S = 0;

  for (let k = n; k <= 20; k++) {
    S += k;
  }

  P *= (n * n + S * S) / (n + 1);
}

console.log(P);

P = 1;

for (let n = 20; n >= 1; n--) {
  let S = 0;

  for (let k = 20; k >= n; k--) {
    S += k;
  }

  P *= (n * n + S * S) / (n + 1);
}

console.log(P);

P = 1;

while (n <= 20) {
  let S = 0;
  let k = n;

  while (k <= 20) {
    S += k;
    
    k++;
  }

  P *= (n * n + S * S) / (n + 1);

  n++;
}

console.log(P);

P = 1;
n = 1;

do {
  let S = 0;
  let k = n;

  while (k <= 20) {
    S += k;
    
    k++;
  }

  P *= (n * n + S * S) / (n + 1);

  n++;
} while (n <= 20);

console.log(P);
