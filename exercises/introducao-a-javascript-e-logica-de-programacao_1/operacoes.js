let a = 3;
let b = 9;
let calculo = 0, valor = 0;



// 1 Adição
// 2 Subtração
// 3 Multiplicação
// 4 Divisão
// 5 Módulo




switch (calculo) {
    case 1:
        valor = a + b;
        console.log(valor);
        break;
    case 2:
        valor = a - b;
        console.log(valor);
        break;
    case 3:
        valor = a * b;
        console.log(valor);
        break;
    case 4:
        valor = a / b;
        console.log(valor);
        break;
    case 5:
        valor = a % b;
        console.log(valor);
        break;
    default:
        break;
}