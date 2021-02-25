let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let index = 0; index < numbers.length; index++) {
    media += numbers[index];
}

media = media / (numbers.length + 1);
console.log("Média aritmética: " + media.toFixed(2));