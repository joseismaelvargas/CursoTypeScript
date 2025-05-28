"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Enefermero"] = 1] = "Enefermero";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
const medico = {
    nombre: "Martin",
    email: "Martin@gmail",
    role: Role.Doctor
};
const prinst = (staff) => {
    console.log(staff);
};
prinst(medico);
let progrmador1 = {
    nombre: "sergio Code",
    tecnologias: ["react", "angular"],
    tomarMate: true
};
let progrmador2 = {
    nombre: "sergio Code",
    tecnologias: ["react", "angular"],
    tomarMate: true
};
function enviarCurriculo(progrmador) {
    console.log("este curriculo es de " + progrmador.nombre);
}
enviarCurriculo(progrmador2);
//# sourceMappingURL=Interfaces.js.map