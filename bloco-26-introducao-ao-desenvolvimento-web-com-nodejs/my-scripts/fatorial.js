const readline = require('readline-sync');

const number = readline.questionInt('Informe um número: ');

let fatorial = 1;

for (let index = 2; index === number; index++) {
  fatorial *= index;
  console.log(fatorial, '*', index);
}