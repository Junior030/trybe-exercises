let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;


for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] % 2 > 0) {
       aux++;
   } 
}
if (aux > 0) {
    console.log("Qtd de números ímpares: " + aux);
}else{
    console.log("Não existe nenhum numero ímpar!");
}