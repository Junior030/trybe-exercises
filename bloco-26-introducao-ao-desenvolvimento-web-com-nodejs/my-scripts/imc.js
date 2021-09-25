const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Qual o seu peso? ');
const altura = readlineSync.questionFloat('Sua altura? ');

const imc = peso / Math.pow(altura, 2);

console.log(`Esse é o seu imc: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log('Peso normal');
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
} else if (imc >= 30.0 && imc <= 34.9){
  console.log('Obesidade grau I');
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log('Obesidade grau II')
} else {
  console.log('Obesidade graus III e IV')
}


