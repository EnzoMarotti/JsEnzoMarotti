//Secccion Buscador
// Seccion Menu hamburguesa
const Menu = document.getElementById("hamburger") ;
const navbar = document.getElementById("nav-ul");

Menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

// Seccion Listen-Buscador

let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")

// Seccion carrito

let divPrdouctosCarrito = document.getElementById("carritoelementos")
let carritoStorage = JSON.parse(localStorage.getItem("ProductosCarrito")) 
console.log(carritoStorage)

carritoStorage.forEach((carritoStorage) => {
    divPrdouctosCarrito.innerHTML += `
        <div class="productos_carrito">
            <div class="productos_carrito_tarjetas">
                <h3>Modelo: ${carritoStorage.nombre}</h3>
                <p>Precio: $${carritoStorage.precio}</p>
                <img class="image_contain" src="../img/phoneSymbol.png">
            </div>
        </div>
    `
})

let productosCompra = document.getElementById("mainCompra")
carritoStorage.forEach((producto) => {
    let sumaProductos = carritoStorage.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0) ;
    productosCompra.innerHTML = `
        <div class="precio">
            <h2>Seccion Compra</h2>
            <p>Precio total: ${sumaProductos}</p>
            <input id="botonCompra" class="btn-compra" type="submit" value="Comprar">
        </div>
    `
    document.getElementById("botonCompra").addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: ':)',
            text: 'Compraste tus productos!',
        })
        localStorage.clear()
        setTimeout(() => {
            location.reload(true)
        }, 3500);
    })
})