function genArr(min, max, amount) {
  const intArr = [];

  for (let i = 1; i <= amount; i++) {
    const intN = Math.floor(min + Math.random() * (max - min + 1))

    intArr.push(intN);
  }

  return intArr;
}

function getOddAmount(arr) {
  let amount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      amount++;
    }
  }

  return amount;
}

function arrToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${i}:\t${arr[i]}\n`;
  }

  return string;
}

const arr = genArr(-100, 100, 10);

console.log('Initial array:\n', arrToString(arr));
console.log('Amount of odd numbers:', getOddAmount(arr));
