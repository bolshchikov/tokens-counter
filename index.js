const compendium = require('compendium-js');
const inputs = require('./input.json');

const ALLOWED_TOKENS = ['CD', 'JJ', 'JJR', 'JJS', 'LS', 'NN', 'NNP', 'NNPS', 'NNS', 'RB', 'RBR', 'RBS', 'VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ'];

const sentences = compendium.analyse(inputs[1].text.toLowerCase());
const occurrences = {};

for (let sentence of sentences) {
  for (let token of sentence.tokens) {
    if (ALLOWED_TOKENS.includes(token.pos)) {
      if (occurrences[token.raw]) {
        occurrences[token.raw] += 1
      } else {
        occurrences[token.raw] = 1
      }
    }
  }
}

console.log(Object.entries(occurrences).sort((a, b) => b[1] - a[1]).filter(rec => rec[1] > 2))

return occurrences;
