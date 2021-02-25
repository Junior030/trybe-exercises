let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;


for (let index = 0; index < numbers.length; index++) {
    for (let index2 = 0; index2 < numbers.length; index2++) {
        if (numbers[index] > numbers[index2]) {
            if (numbers[index] > aux) {
                aux = numbers[index];
            }
        }
    }
    
}

console.log(aux);