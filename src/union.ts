// union
function padLeft(value:string,padding:string|number){
    if(typeof padding==="number"){

        return Array(padding+1).join('')+value;

    }else if(typeof padding==='string'){

        return padding+value;
    }
    throw new Error ('Espera un string pero recibi un '+{padding})
}
console.log(padLeft('Hola mundo',20))