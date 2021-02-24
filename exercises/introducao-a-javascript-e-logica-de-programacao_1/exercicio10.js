let product = 50, venda = 100, lucro, valorDeCustoTotal;
const imposto = 0.2;
const qtdVendas = 1000;

if (product == 0 || venda == 0) {
    

    valorDeCustoTotal = product + (product * imposto);

    lucro = venda - valorDeCustoTotal;

    lucro = lucro * qtdVendas;
    console.log(lucro);

}else{
    console.log("Valores invalidos!");
}