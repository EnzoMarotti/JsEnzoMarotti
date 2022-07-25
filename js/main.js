// Primera entrega: Simulador de venta de videojuegos.


const sumarIva = (precio) => {return precio + (precio * 0.35)}
const mostrarMensaje = (mensaje) => { alert(mensaje) }


let plataforma = parseInt(prompt("Ingrese el numero correspondiente para ver el catálogo de la consola seleccionada \n 1)PS4. \n2)Xbox." ))

main ();
function main (){
    if (plataforma == 1) {
        videojuegoPS4 ();
        valorJuegosPS4 ();
    }

    else if (plataforma == 2){
        videoJuegoXbox ();
        valorJuegosXbox ();
    }

    else 
    console.log ("ingrese un número válido.")
    
}

function videojuegoPS4 () {
    console.log ("1)God Of War. \n 2)Bloodborne. \n 3)Red Dead Redemption 2. \n 4)Uncharted 4.")
}

function videoJuegoXbox () {  
    console.log ("1)Halo Infinite \n 2)Forza Horizon 5 \n 3)Elden Ring \n 4)Hades")
} 




//Consultar precio juegos PS4.


precioVideojuego = 0;


function valorJuegosPS4 () {

 let precioPS4 = prompt("Elija el numero  correspondiente al juego para saber su precio \n 1)God Of War \n2) Bloodborne. \n3)Read Dead Redemption 2. \n4) Uncharted 4. \nPresione 'EXIT' para salir.")

    if  (precioPS4 == 1){
    
                precioVideojuego = sumarIva (4000)
    
                mostrarMensaje("God of War tiene un costo final de " +precioVideojuego);
                cantidadPorUnidad();
                

    }
    else if (precioPS4 == 2){
                 precioVideojuego = sumarIva (2300)
    
                 mostrarMensaje ("Bloodborne tiene un costo final de " +precioVideojuego);
                 cantidadPorUnidad();
    }

    else if (precioPS4 == 3){
        
                precioVideojuego = sumarIva (5500)

                mostrarMensaje ("Read dead Redemption 2 tiene un costo final de " +precioVideojuego);
                cantidadPorUnidad();
    }
        
    else if (precioPS4 == 4){
        
                precioVideojuego = sumarIva (2700)
                mostrarMensaje ("Just Cause 4 tiene un costo final de " +precioVideojuego)
                cantidadPorUnidad();
    }

    else if (precioPS4 == "EXIT" || precioPS4 == "exit") {
            return false;
    }


    else {
        mostrarMensaje ("No tenemos ese videojuego")
    }

    
    valorJuegosPS4 ();    
}




//Consultar precios Xbox 


function valorJuegosXbox () {

 let precioXbox = prompt("Elija el numero  correspondiente al juego para saber su precio \n 1)Halo Infinite \n 2)Forza Horizon 5 \n 3)Elden Ring \n 4)Hades \nPresione 'EXIT' para salir.")

    if  (precioXbox == 1){
    
                precioVideojuego = sumarIva (3500)
    
                mostrarMensaje("Halo Infinite tiene un costo final de " +precioVideojuego);

                cantidadPorUnidad();
                

    }
    else if (precioXbox == 2){
        precioVideojuego = sumarIva (5000)
    
        mostrarMensaje ("Forza Horizon 5 tiene un costo final de " +precioVideojuego);
        cantidadPorUnidad();
    }

    else if (precioXbox == 3){
        
            precioVideojuego = sumarIva (4500)

            mostrarMensaje ("Elden Ring tiene un costo final de " +precioVideojuego);
            cantidadPorUnidad();
    }
        
    else if (precioXbox == 4){
        
            precioVideojuego = sumarIva (2100)
            mostrarMensaje ("Hades tiene un costo final de " +precioVideojuego)
            cantidadPorUnidad();
    }

    else if (precioXbox == "EXIT" || precioXbox == "exit") {
        return false;
    }


    else {
        mostrarMensaje ("No tenemos ese videojuego")
    }
    
    valorJuegosXbox ();  
}


//Calcular costo por cantidad del mismo juego.

function cantidadPorUnidad () {

    let Cantidad = parseInt(prompt("Ingresa la cantidad de copias del juego que deseas. Debes repetir la acción por cada juego que selecciones."));
    
    for (i = 1; i <= Cantidad; i++) {     
        let resultado = precioVideojuego * i ;

        console.log(precioVideojuego, " X "+ i +" = "+ resultado);
    }

}

