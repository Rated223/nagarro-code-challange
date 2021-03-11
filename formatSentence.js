const prompt = require('prompt-sync')();

const getSentence = () => {
  return prompt('Input: ');
}

const getWords = (sentence) => {
  return sentence.split(/[\s,.#$%&;:!¡¿?]+/).filter((word) => word !== '');
}

const formatSentence = (words,sentence) => {
  for (const word of words) {
    if (word.length === 1) continue;
    const uniqueLettersCount = getUniqueLettersCount(word);
    const formatedWord = word.slice(0,1) + uniqueLettersCount + word.slice(-1)
    sentence = sentence.replace(word, formatedWord);
  }

  return sentence;
}

const getUniqueLettersCount = (word) => {
    let count = 0;
    let lettersFilter = [];
    for (let i = 1; i < word.length - 1; i++) {
      if (lettersFilter.includes(word[i])) continue;

      count++;
      lettersFilter.push(word[i]);
    }
    return count;
}

module.exports = { getSentence, getWords, formatSentence, getUniqueLettersCount };