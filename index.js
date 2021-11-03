function genArr(min, max, amount) {
  const intArr = [];

  for (let i = 1; i <= amount; i++) {
    const intN = Math.floor(min + Math.random() * (max - min + 1))

    intArr.push(intN);
  }

  return intArr;
}

function getMin(arr) {
  let min = arr[0];
  let minIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIdx = i;
    }
  }

  return minIdx;
}

function getMax(arr) {
  let max = arr[0];
  let maxIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIdx = i;
    }
  }

  return maxIdx;
}

function arrToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${i}:\t${arr[i]}\n`;
  }

  return string;
}

const n = +prompt('Введіть значення n');

const arr = genArr(-100000, 100000, n);

console.log('Initial array:\n', arrToString(arr));
console.log('Index of min num:', getMin(arr));
console.log('Index: of max num', getMax(arr));