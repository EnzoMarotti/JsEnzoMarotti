// Seccion Menu hamburguesa
const Menu = document.getElementById("hamburger") ;
const navbar = document.getElementById("nav-ul");

Menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
})

// Seccion Listen-Buscador

let inputTexto = document.getElementById("btn-busqueda")
let divProductosBusqueda = document.getElementById("divProductos-busqueda")


fetch('../json/celulares2.json')
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
                alertify.error('Link no encontrado😶. Estamos Trabajando sobre esta sección😅')
                })
            })
        }
    })
})