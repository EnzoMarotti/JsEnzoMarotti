// ARRAYS

let carrito=[];
let precioTotal =[];
const initialValue = 0;

if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    sumarPrecioTotal=JSON.parse(localStorage.getItem("TotalAPagar"));
    }


let lista=document.getElementById("milista");
    

//  ----funcion encargada de generar las cards en base al array.
renderizarProductos();

function renderizarProductos() {
    for (const producto of PS4) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
            <h3> ID: ${producto.id} </h3>
            <img src=${producto.imagen} width="250" height="250">
            <p> Producto: ${producto.nombre}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }


    //----eventos boton
    PS4.forEach(producto =>{
        //----evento individual para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}


// ----Funcion para agregar al carro al hacer click.
function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    alert("Producto: "+producto.nombre+" agregado al carro!");   

        precioTotal.push (producto.precio);
    
        //  ----Constante que me ayuda a sumar los precios de los objetos clickeados.
        const sumarPrecioTotal = precioTotal.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          );
          console.log(sumarPrecioTotal);


        //   ----Tabla donde se representan los elementos agregados al carrito.
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        </tr>
    `;

    //  ----Agregar al storage local tanto el carrito como el precio final.
    localStorage.setItem("carrito",JSON.stringify(carrito));
    localStorage.setItem("TotalAPagar",JSON.stringify(sumarPrecioTotal));
    
}


//  ----Boton finalizar compra
let finalizarCompra= document.getElementById ("finalizarCompra");

finalizarCompra.addEventListener("click",precioFinal);


//  ---- Función que trae del storage el precio final a pagar y lo muestra tanto por alert como en la tabla.
function precioFinal () {
    const pagar = JSON.parse(localStorage.getItem("TotalAPagar"))
    alert ("el total de su compra es $" + pagar + ". \n Puede ver el resumen final en la tabla debajo.");

    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${" "}</td>
            <td>${" "}</td>
            <td> TOTAL: $${pagar}</td>
        </tr>
    `;

}



