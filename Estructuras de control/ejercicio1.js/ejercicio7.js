//Hacer un script que lea un número entero y como resultado informar si el número es primo o  no. 
function esPrimo(numero) {
    if (numero < 2) {
        console.log("No es primo.");
        return;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log("No es primo.");
            return;
        }
    }

    console.log("Es un número primo.");
}

esPrimo(7);