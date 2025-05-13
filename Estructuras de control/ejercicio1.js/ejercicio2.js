//Una persona puede votar en las elecciones si cumple con las siguientes condiciones:
//  a. Tener mínimo 18 años de edad b. Tener cédula c. Tener inscrita la cédula Hacer un script
//  que informe a una persona si puede votar o no puede votar. Recuerde que para poder votar debe cumplir 
// con las 3 condiciones anteriores.  
function puedeVotar(edad, tieneCedula, cedulaInscrita) {
    if (edad >= 18 && tieneCedula && cedulaInscrita) {
        console.log("Puede votar.");
    } else {
        console.log("No puede votar.");
    }
}


puedeVotar(20, true, true);