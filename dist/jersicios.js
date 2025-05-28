"use strict";
let numero = 4;
let nombre = "ismael";
const multiplicar = (a, b) => {
    return a * b;
};
console.log(multiplicar(5, 5));
let string = ["Manzana", "Banana", "Zandia"];
let tipo;
tipo = 5;
const persona1 = {
    name: "ismael",
    edad: 34,
    email: "isma@gmail"
};
const frutaa = {
    nombre: "Manzana",
    precio: 34,
    disponible: false
};
const Descripción = (staff) => {
    console.log(`la fruta ${staff.nombre} sale ${staff.precio} y esta ${staff.disponible ? 'disponible' : 'no esta disponible'}`);
};
Descripción(frutaa);
const Nombreyapellido = (nombre, apellido) => {
    console.log(apellido ? `${nombre} ${apellido}` : nombre);
};
Nombreyapellido("ismael");
//# sourceMappingURL=jersicios.js.map