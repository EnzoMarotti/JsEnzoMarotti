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
// ---- Agregado los alerts
function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
Swal.fire(
    producto.nombre,
    'agregado al carro!',
    'success'
  )  

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
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Deseas finalizar la compra?',
        text: 'Puede ver el resumen final en la tabla debajo.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Finalizar compra',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Compra realizada',
            'Recibira toda la informacion en su correo electronico',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Su compra ha sido cancelada, el carrito se encuentra vacio',
            'error'
          )
        }
      })
    alert ();

    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${" "}</td>
            <td>${" "}</td>
            <td> TOTAL: $${pagar}</td>
        </tr>
    `;

}


//Cosas que quedan por hacer para la entrega final:
// Agregar un boton de sacar items del carrito y que los elimine de storage.
