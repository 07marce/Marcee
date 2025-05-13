//Hacer un script que imprima las tablas de multiplicar del 5, 6 7 8 y 9. 
function imprimirTablas() {
    for (let tabla = 5; tabla <= 9; tabla++) {
        console.log("Tabla del " + tabla);
        for (let i = 1; i <= 10; i++) {
            console.log(tabla + " x " + i + " = " + (tabla * i));
        }
    }
}

imprimirTablas();