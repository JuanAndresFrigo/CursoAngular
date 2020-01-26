// Un archivo simple de TypeScript
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batise�al"; }
    var mensaje;
    if (momento) {
        mensaje = " " + quien + " activ\uFFFD la " + objeto + " en la " + momento;
    }
    else {
        mensaje = " " + quien + " activ\uFFFD la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batise�al", "tarde");
