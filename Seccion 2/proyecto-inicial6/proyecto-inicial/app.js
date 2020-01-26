// Un archivo simple de TypeScript
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion("normal"));
console.log(miFuncionF("flecha"));
console.log(miFuncion2(2, 3));
console.log(miFuncion2F(2, 3));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smassshhh!!!");
        }, 1500);
    }
};
hulk.smash();
