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

//set que tomado de los nombres de los productos
const uniqueNames = new Set();

//funcion que valida si el producto ya se encuentra en el set por medio de la propiedad unica nombre
function validarProductoUnico(nombreProducto) {
    if (uniqueNames.has(nombreProducto)) {
        console.warn(`⚠️ El producto "${nombreProducto}" ya está registrado.`);
        return false; // No se agregó
    }

    uniqueNames.add(nombreProducto);
    return true; // Se agregó correctamente
}

// funcion que me ingresa los datos de un nuevo producto al objeto productos
// ademas de crear automaticamente su propio id
function ingresarDatos(event){
    event.preventDefault(); 
    let productName = document.getElementById('productName').value.trim();
    let productPrice = parseFloat(document.getElementById('productPrice').value)

    if (!productName || isNaN(productPrice)){
        alert("No has ingresado ningun dato!")
        return;
    }

    if (!validarProductoUnico(productName)){
        alert("Intente de nuevo!")
        return;
    }

    const id = Object.keys(temporaryProductos).length+1;

    temporaryProductos[id] = { id: id, nombre: productName, precio: productPrice };

    // Limpiar formulario
    event.target.reset();
    mostrarLista();
}

const container = document.getElementById('showProducts');

// funcion que modifica el html por medio del DOM y muestra un listado con los productos y sus propiedades
function mostrarLista(){
    container.innerHTML = '';
    for(let key in temporaryProductos){
        const prod = temporaryProductos[key];
        const p = document.createElement('p');
        p.textContent = `ID: ${prod.id} - ${prod.nombre} - $${prod.precio.toFixed(2)}`;
        container.appendChild(p);
    }
}



document.getElementById('productForm').addEventListener('submit', ingresarDatos);