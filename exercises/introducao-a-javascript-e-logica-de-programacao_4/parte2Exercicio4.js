function maiorIndice(array){
    let maior = 0, string;
    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array.length; j++) { 
            if (array[i].length > array[j].length) {
                if (maior < array[i].length) {
                    maior = array[i].length;
                    string = array[i];
                }
            }         
        }      
    }
    return string;
}
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

console.log(maiorIndice(array));