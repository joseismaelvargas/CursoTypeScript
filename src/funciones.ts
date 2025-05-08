let vehiculo:'automovil';
vehiculo='automovil'

function sumar(valor:number,valor2:number):number{
    return valor+valor2;
}

const SumaFlecha=(valor:number,number:number):number=>{
   return valor+number
}

function imprimir():void{
    console.log(SumaFlecha(2,2)) 

}
const throwError=(message:string)=>{

  if(!message){
    throw new Error(message)
  }
  return message;
    

}
imprimir()

function imprimir2(a:number,b:number,sumar:(value:number)=>void):void{
   let resultado=a+b;
    sumar(resultado)

}
 
imprimir2(2,2,(x)=>{console.log(x)})