let message:string="hola mundo"
console.log(message) 

let animales:string[]=["perro","oruga","leon"]
let nums:Number[]=[1,2,4,5,2]
let nchecks:boolean[]=[]
let nums2A:Array<number>=[ 3,4,56,]

// nums2A.map(x => x.)  
let tupla:[number,string]= [1,"Chanchicto feliz"]

// Enums
const enum LoadingState {
    Idle,Loading,Succes,Error
}
const enum Talla{
    Chica="m",
    Mediana="m",
    Grande="L"

}
const estaodo=LoadingState.Succes

type Persona={
    readonly id:number,
    nombre:string,
    talla:Talla,
    direccion:{
        numero:number,
        calle:string,
        pais:string
    }
}
const objeto:Persona={
    id:1,
    nombre:"juan lopez",
    talla:Talla.Mediana,
    direccion:{
        numero:1,
        calle:"simepre",
        pais:"Argentina"
    }
}
console.log(objeto)