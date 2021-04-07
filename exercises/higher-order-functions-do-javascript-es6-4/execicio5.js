
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((theAmountOfA, words) => {
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].toLowerCase() === 'a') theAmountOfA += words[i];
    }
    return theAmountOfA;
  }, '').length;
}

assert.deepStrictEqual(containsA(), 20);