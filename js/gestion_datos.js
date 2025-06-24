const productos = {
    1:{
        id: 1, nombre: "Laptop", precio: 1500
    },
    2:{
        id: 2, nombre: "Smartphone", precio: 800
    },
    3:{
        id: 3, nombre: "Tablet", precio: 600
    },
    4:{
        id: 4, nombre: "Smartwatch", precio: 300
    }
};

console.log(Object.keys(productos)); // Muestra las claves del objeto productos
console.log(productos[4]); // Muestra el producto con id 4
console.log(productos[4].nombre); // Muestra el nombre del producto con id 4
console.log(productos[4].precio); // Muestra el precio del producto con id 4