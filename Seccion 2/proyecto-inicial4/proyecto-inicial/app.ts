// Un archivo simple de TypeScript

function getNombre() {
    return "Pedro";
}

let nombre:string ="Juan";
let apellido:string ="Frigo";
let edad:number =27;


// let texto = "Hola "+ nombre + " "+ apellido; 

//Esto es un template literal usando -->   ``

// Lo que esta dentro de ${ xxx } es codigo js puro, variables, metodos, etc

let texto:string = `Hola, ${nombre} ${apellido} (${edad})`; 

let texto2:string = ` ${ getNombre() }`;

console.log(texto2);