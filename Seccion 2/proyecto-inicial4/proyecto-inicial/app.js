// Un archivo simple de TypeScript
function getNombre() {
    return "Pedro";
}
var nombre = "Juan";
var apellido = "Frigo";
var edad = 27;
// let texto = "Hola "+ nombre + " "+ apellido; 
//Esto es un template literal usando -->   ``
// Lo que esta dentro de ${ xxx } es codigo js puro, variables, metodos, etc
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto2 = " " + getNombre();
console.log(texto2);
