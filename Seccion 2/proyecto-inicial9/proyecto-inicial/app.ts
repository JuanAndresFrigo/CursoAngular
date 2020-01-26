interface Xmen {
    nombre: string,
    poder: string
}


function enviarMision (xmen : Xmen){
    console.log("Enviando a: "+ xmen.nombre);
}

function enviarCuartel(xmen: Xmen){
    console.log("Regresando al cuartel: "+ xmen.nombre);
}

let wolverine:Xmen ={
    nombre:"Logan",
    poder:"Regeneracion"
}

enviarMision(wolverine);
enviarCuartel(wolverine);







