// // // Ejemplo If- Else If - else

const AñoActual = 2022;

AñoCompra = parseInt (prompt ("Ingrese el año de compra del televisor"));

let garantia = AñoActual- AñoCompra;

if ( garantia <= 4) {
    alert ("Su televisor esta cubierto por nuestra garantía, comuniquese con soporte técnico");
}

else if (garantia > 4) {
    alert ("Su televisor ya no se encuentra bajo garantía. Lo sentimos.")
}

else {
    alert ("ingrese un valor numerico valido")
}




// // For Entrega:  Calculo para saber el pago diario segun la cantidad de horas trabajadas usando "for"

let PagoPorHora = parseInt(prompt("Ingresar el pago por hora que recibe para calcular el monto segun las horas trabajadas."));

for (let i = 1; i <= 12; i++) {
    let resultado = PagoPorHora * i ;

    console.log(PagoPorHora +" X "+ i +" = "+ resultado);
}




// //While entrega: Juego de adivinanza (no vale ver el codigo jaja)
 
    let usuario = parseInt (prompt ("Adivina el numero que estoy pensando del 1 al 10"));

    while (usuario != 8){

        alert ("Fallaste, intenta nuevamente");

        usuario = prompt ("Prueba con otro numero");

        if (usuario == 8) {
            alert ("adivinaste. El numero que estoy pensando es " + usuario)
        }
    }


// Do... While ejemplo.

let familiares = prompt ("Ingrese los nombres de las personas que conviven con usted. cuando finalice, escriba 'esc'")

do{
    familiares = prompt ("Ingrese los nombres de las personas que conviven con usted. cuando finalice, escriba 'esc'")

    console.log (familiares);
}
while (familiares != "esc");


// Ejemplo Switch

let entrada = prompt("Ingresa tu nombre. Escribe 'ESC' para salir.");

while(entrada != "ESC" ){
   switch (entrada) {
       case "Bruno":
            alert("HOLA tutor Bruno, Bienvenido!");
            break;
        case "Laura":
            alert("HOLA Laura, bienvenida a mi código JS");
            break;
       default:
           alert("Si eres un tutor/a o profesor/a de coder, escribe tu nombre!")
           break;
   }
   entrada = prompt("Ingresa tu nombre. Escribe 'ESC' para salir.");
}
