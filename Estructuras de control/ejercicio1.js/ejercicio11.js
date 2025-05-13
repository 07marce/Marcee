// Hacer un script que lea dos números enteros y como resultado se debe calcular 
// la suma de los pares existentes entre los dos números y el promedio de los números
//  impares existentes entre los dos números. (Incluir los números leídos) 
let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));

let sumaPares = 0;
let sumaImpares = 0;
let cantidadImpares = 0;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        cantidadImpares++;
    }
}

let promedioImpares = cantidadImpares > 0 ? sumaImpares / cantidadImpares : 0;

console.log(`La suma de los números pares entre ${num1} y ${num2} es: ${sumaPares}`);
console.log(`El promedio de los números impares entre ${num1} y ${num2} es: ${promedioImpares}`);
