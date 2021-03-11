const { getSentence, getWords, formatSentence } = require('./formatSentence');

(() => {
  try {
    const sentence = getSentence();
    const words = getWords(sentence);
    const formatedSentence = formatSentence(words, sentence);
    console.log('Output: ' + formatedSentence);
  } catch (error) {
    console.error(error);
  }
})();