// Un archivo simple de TypeScript

let prom1 = new Promise( function( resolve, reject){

    setTimeout( ()=>{
        console.log("Promesa terminada");

        //termina bien
        resolve();

        //termina mal
        //reject();
    }, 1500)


} )


console.log("Paso 1");

prom1.then( function(){
    console.log("Ejecutarme cuando se termine bien");
},
    function(){
        console.error("Ejecutarme si algo sale mal");
    }

)


console.log("Paso 2");

