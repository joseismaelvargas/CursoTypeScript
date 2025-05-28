"use strict";
class Pelicula {
    proyectarEnCine() {
        console.log(this.nombre + ' Esta siendo Proyectada ');
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const pelicula = new Pelicula("Tarzan", ["dicaprio", "ana"], ["actor1", "actor2"]);
console.log(pelicula);
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return 'para ' + this.nombre + ' el ticket es  ' + this.numero;
    }
}
let sorteo = new Sorteo('ismael VArgas');
sorteo.setNumero("45");
console.log(sorteo.sortear());
//# sourceMappingURL=ClassesyPOO.js.map