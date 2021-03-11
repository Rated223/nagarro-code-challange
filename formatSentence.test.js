const { getWords, formatSentence, getUniqueLettersCount } = require('./formatSentence');

test('Should separate the sentance in words.', () => {
  const sentence = 'Hello world my name is Daniel';
  const words = getWords(sentence);

  expect(words).toEqual(
    expect.arrayContaining(['Hello', 'world', 'my', 'name', 'is', 'Daniel'])
  );
});

test('Should ignore special characters.', () => {
  const sentence = 'Hello. world, my name? is Daniel! ';
  const words = getWords(sentence);

  expect(words).toEqual(
    expect.arrayContaining(['Hello', 'world', 'my', 'name', 'is', 'Daniel'])
  );
});

test('Should get the correct count of unique letters in a word.', () => {
  const word = 'Corporation';
  const count = getUniqueLettersCount(word);

  expect(count).toBe(6);
});

test('Should format the sentences correctly.', () => {
  const sentence1 = 'It was many and many a year ago';
  const words1 = getWords(sentence1);
  const sentence2 = 'Copyright,Microsoft:Corporation';
  const words2 = getWords(sentence2);

  const formatedSentence1 = formatSentence(words1, sentence1);
  const formatedSentence2 = formatSentence(words2, sentence2);

  expect(formatedSentence1).toBe('I0t w1s m2y a1d m2y a y2r a1o');
  expect(formatedSentence2).toBe('C7t,M6t:C6n');
})

