// ARRAYS

let carrito=[];
let precioTotal =[];
const initialValue = 0;

if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    }
    //cargar los elementos del carro abandonado a la tabla

let lista=document.getElementById("milista");
    
//llamada a renderizar
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
    //eventos boton
    PS4.forEach(producto =>{
        //evento individual para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    alert("Producto: "+producto.nombre+" agregado al carro!");   

        precioTotal.push (producto.precio);
    
        const sumarPrecioTotal = precioTotal.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          );
          console.log(sumarPrecioTotal);


    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    localStorage.setItem("TotalAPagar",JSON.stringify(sumarPrecioTotal));
    //sumar el total de la compra

    
}

let finalizarCompra= document.getElementById ("finalizarCompra");

finalizarCompra.addEventListener("click",precioFinal);

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



