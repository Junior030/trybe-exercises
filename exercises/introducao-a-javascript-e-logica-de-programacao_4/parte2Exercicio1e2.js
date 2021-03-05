function verificaPalindrome(string){
    let palavra;
    let j = 0;
    for(let i = string.length; i > 0; i--){
        palavra += string[i-1]; 
    }
    if (palavra === "undefined"+string) {
        return true;
    }else{
        return false;
    }
    
}

console.log(verificaPalindrome("desenvolvimento"));


function maiorIndice(array){
    let maior = 0;
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array.length; j++) { 
            if (array[i] > array[j]) {
                if (maior < array[i]) {
                    maior = array[i];
                }
            }         
        }      
    }
    return maior;
}
let array = [2, 3, 6, 7, 10, 1];
let maiorNum = maiorIndice(array);

console.log( array.indexOf(maiorNum));