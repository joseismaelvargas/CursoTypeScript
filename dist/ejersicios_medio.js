"use strict";
const tring = ["Flower", "pollo", "Amazing"];
function CalcularString(data) {
    return data.reduce((logest, val) => (val.length > logest.length ? val : logest), '');
}
console.log(CalcularString(tring));
function Invertir_String(data) {
    return data.split('').reverse().join('');
}
console.log(Invertir_String("Hola mundoo"));
//# sourceMappingURL=ejersicios_medio.js.map