// Hacer un script que pida un número y calcule su factorial 
// (El factorial de un número es el producto de todos los enteros 
// entre 1 y el propio número y se representa por el número seguido 
// de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) 
let num = parseInt(prompt("Ingresa un número para calcular su factorial: "));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`El factorial de ${num} es ${factorial}`);