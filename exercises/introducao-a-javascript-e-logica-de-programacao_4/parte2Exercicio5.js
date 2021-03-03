function maiorIndice(array){
    let maior = 0;
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array.length; j++) { 
            if (i != j) {
                if (array[j] === array[i]) {
                    maior ++;
                }
            }         
        }      
    }
    return maior;
}
let array = [2, 3, 2, 5, 8, 2, 3];
let maiorNum = maiorIndice(array);

console.log( array.indexOf(maiorNum));