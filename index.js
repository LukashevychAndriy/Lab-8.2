function genArr(min, max, rows, cols) {
  const arr = [];

  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let k = 0; k < cols; k++) {
      arr[i][k] = Math.floor(min + Math.random() * (max - min + 1));
    }
  }

  return arr;
}

function sort(arr, rowCount, colCount) {
  for (let i = 0; i < colCount - 1; i++) {
    for (let k = colCount - 2; k >= i; k--) {
      if (arr[0][k] < arr[0][k + 1] ||
          arr[0][k] === arr[0][k + 1] && arr[1][k] < arr[1][k + 1] ||
          arr[0][k] === arr[0][k + 1] && arr[1][k] === arr[1][k + 1] && arr[2][k] > arr[2][k + 1]) {
        switchColumns(arr, rowCount, k, k + 1);
      }
    }
  }
}

function switchColumns(arr, rowCount, col1Idx, col2Idx) {
  for (let i = 0; i <= rowCount - 1; i++) {
    const tmp = arr[i][col1Idx];
    arr[i][col1Idx] = arr[i][col2Idx];
    arr[i][col2Idx] = tmp;
  }
}

function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] % 3 === 0 && arr[i][k] > 0) {
        sum += arr[i][k];
      }
    }
  }

  return sum;
}

function getAmount(arr) {
  let amount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] % 3 === 0 && arr[i][k] > 0) {
        amount++;
        setZero(arr, i, k);
      }
    }
  }

  return amount
}

function setZero(arr, rowIdx, colIdx) {
  arr[rowIdx][colIdx] = 0;
}

function arrToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] >= 0) {
        string += ' ';
      }

      if (arr[i][k] < 10  && arr[i][k] > -10) {
        string += ' ';
      }

      string += arr[i][k] + '\t';
    }

    string += '\n';
  }

  return string.slice(1);
}

const arr = genArr(-21, 24, 9, 6);

console.log('Початкова матриця:\n', arrToString(arr));
sort(arr, 9, 6);
console.log('Посортована матриця:\n', arrToString(arr));
console.log('Сума:\n', getSum(arr));
console.log('Кількість:\n', getAmount(arr));
console.log('Кінцева матриця:\n', arrToString(arr));