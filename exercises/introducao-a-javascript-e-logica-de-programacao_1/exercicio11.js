let salario = 3000;
let INSS = 0, IR = 0;

if (salario <= 1556.94) {
    INSS = INSS - (salario * 0.08);
} else if (salario > 1556.94 && salario <= 2594.92) {
    INSS = INSS - (salario * 0.09);
} else if (salario > 2594.92 && salario <= 5189.82) {
    INSS = INSS - (salario * 0.11);
} else if (salario > 5189.82) {
    INSS = INSS - 570.88;
}
    
if (salario <= 1903.98) {
    IR = 0;
} else if (salario > 1903.98 && salario <= 2826.65) {
    IR = IR - (salario * 0.075);
} else if (salario > 2826.65 && salario <= 3751.05) {
    IR = IR - (salario * 0.15);
} else if (salario > 3751.05 && salario <= 4664.68) {
    IR = IR - (salario * 0.225);
} else if (salario > 4664.68) {
    IR = IR - (salario * 0.275)
}

console.log(IR);