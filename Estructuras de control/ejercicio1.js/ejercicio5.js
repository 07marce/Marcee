//La nueva reforma tributaria en Colombia propone recaudar un impuesto a los salarios 
// de todos los colombianos de acuerdo a la siguiente tabla:  
function calcularImpuesto(salario) {
    let impuesto = 0;

    if (salario < 2500000) {
        impuesto = salario * 0.1;
    } else if (salario >= 2500000 && salario < 5000000) {
        impuesto = salario * 0.15;
    } else {
        impuesto = salario * 0.2;
    }

    console.log("El impuesto a pagar es: " + impuesto + " pesos.");
}

calcularImpuesto(3000000);