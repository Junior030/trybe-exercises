const readlineSync = require('readline-sync');


const randon = Math.floor(Math.random() * 11);
let loop = true;
while (loop) {  
  const tentativa = readlineSync.questionInt('Qual o numero sorteado? ');
  if(tentativa == randon) {
    console.log('Parabéns, número correto!');
    loop = false;
  } else {
    console.log('Opa, não foi dessa vez.')
    loop = true;
  }
}