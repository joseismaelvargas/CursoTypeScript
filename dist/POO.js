"use strict";
class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    Lado() {
        return this.lado * this.lado;
    }
}
let cuadrado = new Cuadrado(34);
console.log(cuadrado.Lado());
class Figura {
    constructor(base, altura) {
        this.base = base,
            this.altura = altura;
    }
    Calcula() {
        return this.altura * this.base;
    }
}
class Rectangulo extends Figura {
    Calcula() {
        return this.base * this.altura;
    }
}
class Triangulo extends Figura {
    Calcula() {
        return this.base * this.altura / 2;
    }
}
const figura = [new Triangulo(22, 33), new Rectangulo(22, 23)];
for (let objeto of figura) {
    console.log(objeto.Calcula());
}
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre,
            this.sueldo = sueldo;
    }
    calcularSueldo() {
        return this.sueldo;
    }
}
class Gerente extends Empleado {
    calcularSueldo() {
        const bonificación = this.sueldo * 30;
        const plus = bonificación / 100;
        console.log(plus);
        return this.sueldo + plus;
    }
}
class Operario extends Empleado {
    calcularSueldo() {
        return this.sueldo;
    }
}
const sueldo = new Empleado("mario", 100);
const gerente = new Gerente("mario", 100);
console.log(gerente.calcularSueldo());
class Transporte {
    constructor(cobro, km) {
        this.cobro = cobro,
            this.km = km;
    }
    calcularviaje() {
        return "";
    }
}
class Taxi extends Transporte {
    calcularviaje() {
        return `EL taxi te cobro ${this.cobro * this.km}`;
    }
}
class Bus extends Transporte {
    calcularviaje() {
        return `EL Bus te cobro ${this.cobro * this.km}`;
    }
}
class Tren extends Transporte {
    calcularviaje() {
        const milla = this.km * 0.5;
        return `EL Tren te cobro ${this.cobro + milla}`;
    }
}
const Recibirlista = () => {
    const transporte = [new Tren(20, 50),
        new Bus(0.8, 30),
        new Taxi(1.5, 15)];
    for (let object of transporte) {
        console.log(`Los pagos son los siguientes ${object.calcularviaje()}`);
    }
};
Recibirlista();
class Personas {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad;
    }
}
class Alumno extends Personas {
    constructor(nombre, edad, nota1, nota2, nota3) {
        super(nombre, edad);
        this.nota1 = nota1,
            this.nota2 = nota2,
            this.nota3 = nota3;
    }
    calcularPromedio() {
        const promedio = this.nota1 + this.nota2 + this.nota3;
        return `El Promedio del alumno es ${promedio / 3}`;
    }
}
class Maestra extends Personas {
    constructor(nombre, edad, sueldo1, sueldo2) {
        super(nombre, edad);
        this.sueldo1 = sueldo1,
            this.sueldo2 = sueldo2;
    }
    calcularSueldo() {
        const sueldo = this.sueldo1 + this.sueldo2;
        return `El Promedio del alumno es ${sueldo}`;
    }
}
const maestra = new Maestra("juana", 34, 1000, 3000);
const alumno = new Alumno("mario", 10, 10, 7, 8);
console.log(alumno.calcularPromedio());
console.log(maestra.calcularSueldo());
console.log(alumno);
class CuentaBAncaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    retirar(n) {
        this.saldo -= n;
        return `uste retiro el saldo ${n} le queda ${this.saldo}`;
    }
    adddepositar(n) {
        this.saldo += n;
        return ` su cuenta aumento a ${this.saldo}`;
    }
}
let cuenta = new CuentaBAncaria(100);
console.log(cuenta);
cuenta.adddepositar(100);
console.log(cuenta.retirar(30));
console.log(cuenta.adddepositar(300));
class ITem {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio;
    }
}
class Inventario {
    constructor(item) {
        this.item = item || [];
    }
    getproducto(categoria) {
        const producto = this.item.filter((item) => item.categoria === categoria);
        return producto;
    }
    setproducto(producto) {
        this.item.push(producto);
        return true;
    }
    filtrarPrecio(min, max) {
        return this.item.filter((item) => item.precio >= min && item.precio <= max);
    }
}
const item = new ITem("papa", "comida", 35);
const item2 = new ITem("cebolla", "verduras", 2);
const item3 = new ITem("jabon", "limpiesa", 35);
const item4 = new ITem("pimiento", "verduras", 5);
const item5 = new ITem("acelga", "verduras", 4);
const item6 = new ITem("jabon", "limpiesa", 35);
const categoria = new Inventario([]);
categoria.setproducto(item);
categoria.setproducto(item2);
categoria.setproducto(item3);
categoria.setproducto(item4);
categoria.setproducto(item5);
categoria.setproducto(item6);
console.log(categoria.item);
console.log(categoria.getproducto("verduras"));
console.log(categoria.filtrarPrecio(1, 10));
function getRAmdonId() {
    return Math.floor(Math.random() * 10000);
}
class Cliente {
    constructor(datos) {
        var _a;
        this.id = (_a = datos.id) !== null && _a !== void 0 ? _a : getRAmdonId(),
            this.nombre = datos.nombre,
            this.contraseña = datos.contraseña,
            this.edad = datos.edad;
        this.historial = categoria.item;
    }
}
const cliente = new Cliente({
    nombre: "Isma",
    contraseña: 543,
    edad: 22,
    historial: []
});
console.log(cliente);
class Libro {
    constructor(title, pag, disponible, id) {
        this.title = title,
            this.pag = pag,
            this.disponible = disponible;
        this.id = id;
    }
}
class Usuario {
    constructor(nombre, correo, libros = []) {
        this.nombre = nombre,
            this.correo = correo,
            this.libros = libros || [];
    }
    agregarlibro(title) {
        this.libros.push(title);
        console.log(`El libro ${title} ha sido prestado  a ${this.nombre}`);
    }
}
class Biblioteca {
    constructor(item) {
        this.item = item || [];
    }
    agregarLibro(itemlitbros) {
        this.item.push(itemlitbros);
    }
    prestarLIbro(title) {
        const LibroEncontrado = this.item.filter((item) => item.title === title && item.disponible === true);
        if (LibroEncontrado.length > 0) {
            LibroEncontrado.forEach((item) => {
                item.disponible = false;
            });
            console.log(`El libro ${title} se presto`);
        }
        else {
            console.log("El libro no se Encontro o a sido prestado");
        }
        return LibroEncontrado;
    }
}
const libro = new Libro("the lord of the ring", 100, true, 23);
const libro2 = new Libro("narnia", 120, true, 6);
const libro3 = new Libro("las mil y una noche", 420, true, 2);
const usuariolibro = new Usuario("isma", "Correo isma");
const biblioteca = new Biblioteca([]);
biblioteca.agregarLibro(libro);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
console.log(biblioteca);
console.log(biblioteca.prestarLIbro("narnia"));
console.log(usuariolibro.agregarlibro("narnia"));
console.log(biblioteca.prestarLIbro("the lord of the ring"));
console.log(usuariolibro.libros);
//# sourceMappingURL=POO.js.map