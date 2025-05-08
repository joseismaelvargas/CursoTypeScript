"use strict";
let vehiculo;
vehiculo = 'automovil';
function sumar(valor, valor2) {
    return valor + valor2;
}
const SumaFlecha = (valor, number) => {
    return valor + number;
};
function imprimir() {
    console.log(SumaFlecha(2, 2));
}
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
imprimir();
function imprimir2(a, b, sumar) {
    let resultado = a + b;
    sumar(resultado);
}
imprimir2(2, 2, (x) => { console.log(x); });
//# sourceMappingURL=funciones.js.map