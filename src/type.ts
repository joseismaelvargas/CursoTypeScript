let persona:{
    nombre:string,
    edad:number,
    direccion:{
        calle:string,
        pais:string
    }
    curso:Array<string>
}={
    nombre:"Rodrigoo",
    edad:3,
    direccion:{
      calle:"avenida",
      pais:"Argentina"
    },
    curso:["Fluter","patrones","feliz"]
}

let hobbies:any[]=[1,"Futbol","leer ","aprender ingles","Tenis"]

for(const hobbie of hobbies){
    console.log(hobbie)
}


// tupla
type vehiculoType=[string,number,string]
let aunto:vehiculoType=["ford",20023,"3fds"]
let moto:vehiculoType=["YAmaha",2005,"verde"]