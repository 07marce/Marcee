//Hacer un script  que imprima los números múltiplos de 3 que hay entre dos números.  
function multiplosDe3(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

multiplosDe3(10, 30);