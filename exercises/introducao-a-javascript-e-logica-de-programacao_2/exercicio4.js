let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let index = 0; index < numbers.length; index++) {
    media += numbers[index];
}

media = media / (numbers.length + 1);


if (media > 20) {
    console.log("Valor maior que 20.");
}else{
    console.log("Valor menor ou igual a 20.");
}
