function getLastWordStartsWithLtr(str, letter) {
  const wordsArr = getWordsFromStr(str);
  
  let lastWord = '';
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i][0].toLowerCase() === letter.toLowerCase()) {
      lastWord = wordsArr[i];
    }
  }

  return lastWord;
}

function getWordsFromStr(str) {
  const wordsArr = [];

  let i = 0;
  while (i < str.length) {
    if (str[i] === ' ') {
      i++;
      continue;
    }

    let word = '';

    for (let k = i; k < str.length && str[k] !== ' '; k++) {
      word += str[k];
      i = k + 1;
    }

    if (word.length > 1) {
      wordsArr.push(word);
    }
  }

  return wordsArr;
}

let str = 'альгуль . ... танк в ринок / а абзац клоун а Абуз ';
console.log('Останнє слово, яке починається на букву а:', getLastWordStartsWithLtr(str, 'а'));

module.exports = {getLastWordStartsWithLtr, getWordsFromStr};
