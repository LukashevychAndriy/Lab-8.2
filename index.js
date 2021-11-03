function genArr(min, max, amount) {
  const arr = [];

  for (let i = 1; i <= amount; i++) {
    const n = min + Math.random() * (max - min);

    arr.push(n);
  }

  return arr;
}

function getMaxAbsIdx(arr) {
  let maxAbs = Math.abs(arr[0]);
  let maxAbsIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i]) > maxAbs) {
      maxAbs = Math.abs(arr[i]);
      maxAbsIdx = i;
    }
  }

  return maxAbsIdx;
}

function getSum(arr) {
  let positiveIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveIdx = i;
      break;
    }
  }

  let sum = 0;

  if (positiveIdx === -1) {
    return sum;
  }

  for (let i = positiveIdx + 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sortArray(arr, a, b) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i].toFixed(0) >= a && +arr[i].toFixed(0) <= b) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  let k = 0;

  for (let i = 0; i < arr1.length; i++) {
    arr[k] = arr1[i];
    k++;
  }

  for (let i = 0; i < arr2.length; i++) {
    arr[k] = arr2[i];
    k++;
  }
}

function arrToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${i}:\t${arr[i]}\n`;
  }

  return string;
}

const n = +prompt('Введіть значення параметру n');
const a = +prompt('Введіть значення параметру a');
const b = +prompt('Введіть значення параметру b');
const arr = genArr(-100, 100, n);

console.log('Початковий масив:\n', arrToString(arr));
console.log('Індекс елементу модуль якого найбільший:', getMaxAbsIdx(arr));
console.log('Сума елементів після першого додатнього елементу:', getSum(arr));
sortArray(arr, a, b);
console.log('Кінцевий масив:\n', arrToString(arr));
