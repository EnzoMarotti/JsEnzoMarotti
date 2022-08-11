const carrito=[];

class Producto {
    constructor(nombre, imagen, precio) {
        this.nombre = nombre.toUpperCase();
        this.imagen = imagen;
        this.precio = parseInt(precio);
      }
}

const PS4 = []


PS4.push(new Producto("Elden Ring","../img/eldenRing.jpg", 12000));
PS4.push(new Producto("Horizon Forbidden West", "../img/horizon.jpg", 12000));
PS4.push(new Producto("Resident Evil 8 Village", "../img/RE8.png", 9000));



const Gamecards=document.getElementById ("PS4");

const mostrar = () =>{
    for (let juegos of PS4) {
        Gamecards.innerHTML +=
        `
        <div class="card" style="width: 18rem;">
            <img src="${juegos.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${juegos.nombre}</h5>
                <p class="card-text">${juegos.precio}</p>
                <a href="#" id="btnCompra" class="btn btn-primary">agregar al carrito</a>
            </div>
        </div>
        `
    }
}



const btnPS4 = document.getElementById ("btnPS4");

btnPS4.addEventListener('click', mostrar);



const btnAgregarCarrito = document.getElementById ("btnCompra");


function AgregarItem (productoId) {
    carrito.push (productoId)
}

btnAgregarCarrito.onclick = function (AgregarItem) {
    AgregarItem ();
}
//Todavia no sale el carrito//
