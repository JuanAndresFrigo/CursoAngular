// Un archivo simple de TypeScript

let miFuncion = function(a) {
  return a;
};

let miFuncionF = a => a;

let miFuncion2 = function(a: number, b: number) {
  return a + b;
};

let miFuncion2F = (a: number, b: number) => a + b;


console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));
console.log(miFuncion2(2,3));
console.log(miFuncion2F(2,3));



let miFuncion3 = function (nombre:string) {
    nombre =nombre.toUpperCase();
    return nombre;
}


let miFuncion3F = (nombre:string)=>{
    nombre =nombre.toUpperCase();
    return nombre;
}




let hulk = {
    nombre:"Hulk",
    smash(){
        setTimeout(() => {
           console.log (this.nombre + " smassshhh!!!") 
        }, 1500);
    }
}
  
hulk.smash();












