let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 0; i < numbers.length; i++) {
    for(let j = 0; j < numbers.length; j++){
        let aux = numbers[i];
        if (aux > numbers[j]) {           
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }    
}

console.log(numbers);