class Serv{
    constructor(Servicio, precio){
        this.Servicio = Servicio.toLowerCase();
        this.precio = (precio);
    }
}

const Servicios=[]



let ingreso= prompt  ("Ingrese el nombre de la comida que desea ordenar: \nrissoto de calabaza. \nwrap proteico. \nchicken pasta. \nprotein pizza. \nprotein pancakes. \nprotein smooties. \n Para terminar la orden, escriba 'f' y dele a aceptar.").toLowerCase();

let precio=0;

function calcular(){

 while (ingreso != "f") {
    
    
    
    switch(ingreso) {
    case "rissoto de calabaza":
    Servicios.push  (new Serv ("rissoto de calabaza",1100));
    precio = precio + 1100;
    break;
    
    case "wrap proteico":
    Servicios.push  (new Serv ("wrap proteico",500));
    precio= precio + 500;
    break;
    
    case "chicken pasta":
    Servicios.push  (new Serv ("chicken pasta",900));
    precio = precio + 900;
    break;
    
    case "protein pizza":
    Servicios.push  (new Serv ("protein pizza",899));
    precio= precio + 899;
    break;
    
    case "protein pancakes":
    Servicios.push  (new Serv ("protein pancakes",400));
    precio = precio + 400;
    break;
    
    case "protein smooties":
    Servicios.push  (new Serv ("protein smooties",500));
    precio = precio + 500;
    break;
    



}




if (precio == 0){
    console.log("usted no ha selecciono nada")
}

console.table(Servicios);

ingreso = prompt  ("Ingrese el nombre de la comida que desea ordenar: \nrissoto de calabaza, \nwrap proteico, \nchicken pasta, \nprotein pizza, \nprotein pancakes, \nprotein smooties. \n Para terminar la orden, escriba 'f' y dele a aceptar.").toLowerCase();
      
}



let filt = Servicios.filter ((ser) => ser.precio < 500)
console.log(filt);
let filt2 = Servicios.filter ((ser) => ser.precio >= 500 && ser.precio < 900)
console.log(filt2);
let filt3 = Servicios.filter ((ser) => ser.precio >= 900 && ser.precio < 1200)
console.log(filt3);
let filt4 = Servicios.filter ((ser) => ser.precio >= 1200 && ser.precio < 1500)
console.log(filt4);

ivaIncluido=precio*1.21;

console.log("precio final"+" $"+ ivaIncluido + (" (iva incluido)"));




}

calcular();