//Hacer un script que lea un número entero entre 1 y 7 correspondiente a cada día de la semana
//  donde 1 corresponde a Lunes y 7 a Domingo. El script debe imprimir el día de acuerdo al número leído.
//  Si el número no está entre 1 y 7 se debe mostrar un mensaje que diga “Número fuera de rango” 
function diaSemana(numero) {
    switch (numero) {
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miércoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sábado"); break;
        case 7: console.log("Domingo"); break;
        default: console.log("Número fuera de rango");
    }
}

diaSemana(4);
