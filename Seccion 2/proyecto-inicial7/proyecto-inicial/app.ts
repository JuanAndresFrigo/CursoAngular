// Un archivo simple de TypeScript

let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder:"Droga"
}


// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// console.log(nombre, clave, poder);


//esto es lo mismo que lo comentado arriba, pero en una sola linea de codigo
let { nombre, clave, poder }= avenger;


console.log(nombre, clave, poder);


// ******** destructuracion de arreglos ********

let avengers : string[]=["Thor", "Steve", "Tony"];

let [thor, capitan, ironman]=avengers;

console.log( thor, capitan, ironman);


