function genArr(min, max, amount) {
  const intArr = [];

  for (let i = 1; i <= amount; i++) {
    const intN = Math.floor(min + Math.random() * (max - min + 1))

    intArr.push(intN);
  }

  return intArr;
}

function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      sum += arr[i];
    }
  }

  return sum;
}

function getAmount(arr) {
  let amount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      amount++;
    }
  }

  return amount;
}

function setZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      arr[i] = 0;
    }
  }
}

function arrToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${i}:\t${arr[i]}\n`;
  }

  return string;
}

const arr = genArr(5, 90, 25);

console.log('Initial array:\n', arrToString(arr));
console.log('Sum:', getSum(arr));
console.log('Amount:', getAmount(arr));
setZero(arr)  
console.log('Changed array:\n', arrToString(arr));
