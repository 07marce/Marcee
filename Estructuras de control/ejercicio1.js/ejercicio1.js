//Escribir un script que diga si un número es par o es impar. 
// Recordemos que un número es par si al dividirlo por 2 da como resto 0. 
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

esParOImpar(6);
