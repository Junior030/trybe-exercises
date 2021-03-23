// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


//   const testingScope = (escopo) => (escopo === true) ? ' ótimo, fui utilizada no escopo !': 'Não devo ser utilizada fora meu escopo (else)'; 

//   console.log(testingScope(true));

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);


// const fatorial = num => {
//     let fatoril =num;
    
//     if (num > 0) {
//         for (let index = num-1; index > 0; index -= 1) {
//             fatoril *= index;
//         }  
//     } else {
//         fatoril = 'Numero negativo ou zero!';
//     }
//     return fatoril;
// }

// console.log(fatorial(0));

// const button = document.querySelector('#button');
// const div = document.querySelector('#qtd');
// let num = 0;
// button.addEventListener('click' , () => {
//     num += 1;
//     div.innerHTML = num; 
// })

// const longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu");
// let big = ''; 
// const palavras = longestWord.split(' ').forEach(word => {
//     if (word.trim().length > big.length) {
//         big = word.trim();
//     }
// });


// console.log(big);