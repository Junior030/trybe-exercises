const readlineSync = require('readline-sync');


const distancia = readlineSync.questionFloat('Qual a sua distância? ');
const tempo = readlineSync.questionFloat('Seu tempo? ');

const velocidade = distancia / tempo;

console.log(`Velociade média: ${velocidade.toFixed(2)}`);