let carrito =[]

let divProductos = document.getElementById("divProductos")
// Aqui agregue un fetch donde retorno mis elementos de un json
fetch('./json/celulares.json')
.then(response => response.json())
.then(celulares => {
    let {id,  nombre, img, espacio, ram, procesador, precio} = celulares
    celulares.forEach((celulares) => {  
        divProductos.innerHTML += `
        <div class="main_productos" id="producto${celulares.id}">
        <img src="${celulares.img}">
            <div class="main_productos_elementos">
                <h2>Modelo: ${celulares.nombre}</h2>
                <p>${celulares.espacio}GB Almacenamiento</p>
                <p>${celulares.ram}GB Ram</p>
                <p>Procesador: ${celulares.procesador}</p>
                <p>${celulares.precio}$</p>
            </div>
            <input id="btn${celulares.id}" class="btn-compra" type="submit" value="Añadir al Carrito">
        </div>
        `
    })
    celulares.forEach(celulares => {
        document.getElementById(`btn${celulares.id}`).addEventListener('click', () => {
        alertify.success('Agregaste un producto al carrito🤩');
        console.log(celulares)
        carrito.push(celulares)
        localStorage.setItem("ProductosCarrito" , JSON.stringify(carrito))
        })
    })
})


// Seccion Menu hamburguesa
const Menu = document.getElementById("hamburger") ;
const navbar = document.getElementById("nav-ul");

Menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})


// Creando un buscador del navBar.
let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")

fetch('./json/celulares.json')
.then(response => response.json())
.then(celulares => {
    let {id,  nombre, img, precio, link} = celulares
    inputTexto.addEventListener('input', () =>{ 
    let buscador = inputTexto.value
    // console.log(buscador.toUpperCase)
    let celularesFiltro = celulares.filter(celulares => celulares.nombre.includes(buscador.toUpperCase()))
    if (inputTexto.value === ""){ 
        divProductosBusqueda.innerHTML ="";
    } else {
        celularesFiltro.forEach((celulares) => {
            divProductosBusqueda.innerHTML =` 
                <div class="main_busqueda_productos">
                    <div class="main_busqueda_productos_elementos">
                    <h2>Modelo: ${celulares.nombre}</h2>
                    <p>${celulares.precio}$</p>
                    <img src="${celulares.img}">
                    <a id="busqueda_pages" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Ver más</a>
                    </div>
                </div>
            `
            document.getElementById('busqueda_pages').addEventListener('click', ()=>{ 
                alertify.error('Link no encontrado😶 . Estamos Trabajando sobre esta sección😅')
                })
            })
        }
    })
})