/*
1. Almacene información de productos utilizando un objeto con las siguientes propiedades:
    a. id (clave única del producto).
    b. nombre (nombre del producto).
    c. precio (valor numérico del producto).

2. Convierta los datos del objeto a un Set para garantizar que no haya duplicados.

3. Use un Map para agregar información adicional a cada producto (ej., categoría como clave y
    nombre del producto como valor).

4. Imprima y recorra los datos utilizando bucles como for...in y for...of, así como métodos como
    forEach()
*/
const temporaryProductos = {
    1:{//este 1 seria el numproduct
        id: 1, nombre: "Laptop", precio: 1500//y esto es el data product
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

// console.log(Object.keys(temporaryProductos)); // Muestra las claves del objeto temporaryProductos
// console.log(temporaryProductos[4]); // Muestra el producto con id 4
// console.log(temporaryProductos[4].nombre); // Muestra el nombre del producto con id 4
// console.log(temporaryProductos[4].precio); // Muestra el precio del producto con id 4

// const uniqueProducts = new Set()

// for (let producto in temporaryProductos){
//     uniqueProducts.add(temporaryProductos[producto].nombre)
// }

// console.log(uniqueProducts)



// console.log(productPrice)

function ingresarDatos(event){
    event.preventDefault(); 
    let productName = document.getElementById('productName').value.trim();
    let productPrice = parseFloat(document.getElementById('productPrice').value)

    if (!productName || isNaN(productPrice)){
        alert("No has ingresado ningun dato!")
        return;
    }

    const id = Object.keys(temporaryProductos).length+1;

    temporaryProductos[id] = { id: id, nombre: productName, precio: productPrice };

    // Limpiar formulario
    // event.target.reset();
    console.log(temporaryProductos)
}

const container = document.getElementById('showProducts');
container.innerHTML = '';

for(let key in temporaryProductos){
    const prod = temporaryProductos[key];
    const p = document.createElement('p');
    p.textContent = `ID: ${prod.id} - ${prod.nombre} - $${prod.precio.toFixed(2)}`;
    container.appendChild(p);
}


document.getElementById('productForm').addEventListener('submit', ingresarDatos);
// class ProductList{
//     constructor(numProduct, dataProduct){
//         this.numProduct = numProduct;
//         this.dataProduct = dataProduct;
//     }
// }

