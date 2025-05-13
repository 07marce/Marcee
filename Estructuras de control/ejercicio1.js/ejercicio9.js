//Hacer un script que lea un número entero entre 1 y 20 y también debe leer una frase. 
// Al final el script debe imprimir la frase tantas veces el número leído. 
let numero = parseInt(prompt("Ingresa un número entre 1 y 20: "));
let frase = prompt("Ingresa una frase: ");

if (numero >= 1 && numero <= 20) {
    for (let i = 0; i < numero; i++) {
        console.log(frase);
    }
} else {
    console.log("Número fuera de rango.");
}
