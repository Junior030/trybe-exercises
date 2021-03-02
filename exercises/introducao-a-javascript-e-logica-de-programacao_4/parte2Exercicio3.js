function maiorIndice(array){
    let maior = 0;
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array.length; j++) { 
            if (array[i] < array[j]) {
                if (maior > array[i]) {
                    maior = array[i];
                }
            }         
        }      
    }
    return maior;
}
let array = [2, 4, 6, 7, 10, 0, -3];
let maiorNum = maiorIndice(array);

console.log( array.indexOf(maiorNum));