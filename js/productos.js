class productos {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.imagen = imagen;
        this.precio = parseInt(precio);
      }
}

// Array de juegos PS4
const PS4= [];

// Productos PS4
PS4.push(new productos(1,"Elden Ring","../img/eldenRing.jpg", 12000));
PS4.push(new productos(2,"Horizon Forbidden West", "../img/horizon.jpg", 12000));
PS4.push(new productos(3,"Resident Evil 8 Village", "../img/RE8.png", 9000));


