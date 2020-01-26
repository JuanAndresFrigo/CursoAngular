// Un archivo simple de TypeScript
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
// console.log(nombre, clave, poder);
//esto es lo mismo que lo comentado arriba, pero en una sola linea de codigo
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
// ******** destructuracion de arreglos ********
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capitan = avengers[1], ironman = avengers[2];
console.log(thor, capitan, ironman);
