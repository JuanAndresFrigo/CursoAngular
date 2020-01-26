function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Regresando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Logan",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
