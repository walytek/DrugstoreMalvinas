const productos = {
    Comestibles: [
        { nombre: 'Arroz', precio: 5 },
        { nombre: 'Fideos', precio: 3 },
        { nombre: 'Aceite', precio: 10 }
    ],
    Bebidas: [
        { nombre: 'Agua Mineral', precio: 2 },
        { nombre: 'Gaseosa', precio: 4 },
        { nombre: 'Jugo de Naranja', precio: 3 }
    ],
    Lácteos: [
        { nombre: 'Leche', precio: 2 },
        { nombre: 'Queso', precio: 6 },
        { nombre: 'Yogur', precio: 3 }
    ],
    Fiambres: [
        { nombre: 'Jamón', precio: 8 },
        { nombre: 'Salchichón', precio: 7 },
        { nombre: 'Mortadela', precio: 6 }
    ],
    'Higiene del Hogar': [
        { nombre: 'Detergente', precio: 5 },
        { nombre: 'Lavandina', precio: 3 },
        { nombre: 'Jabón en Polvo', precio: 4 }
    ],
    'Cuidado Personal': [
        { nombre: 'Shampoo', precio: 7 },
        { nombre: 'Jabón de Baño', precio: 2 },
        { nombre: 'Crema Dental', precio: 3 }
    ],
    Mascotas: [
        { nombre: 'Alimento para Perros', precio: 15 },
        { nombre: 'Alimento para Gatos', precio: 12 },
        { nombre: 'Arena Sanitaria', precio: 8 }
    ],
    Golosinas: [
        { nombre: 'Chocolates', precio: 4 },
        { nombre: 'Caramelos', precio: 1 },
        { nombre: 'Galletas Dulces', precio: 3 }
    ]
};

let carrito = [];
let total = 0;

function mostrarProductos(categoria) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';

    if (productos[categoria]) {
        productos[categoria].forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.className = 'producto';
            divProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.precio} $</p>
                <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
            `;
            contenedorProductos.appendChild(divProducto);
        });
    } else {
        contenedorProductos.innerHTML = '<p>No hay productos en esta categoría.</p>';
    }
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - ${item.precio} $`;
        listaCarrito.appendChild(li);
    });
    totalElemento.textContent = total;
}

function comprar() {
    const mensaje = `Hola Anita, quiero comprar los siguientes productos:\n${carrito.map(item => `${item.nombre} - ${item.precio} $`).join('\n')}\nTotal: ${total} $`;
    const url = `https://wa.me/+543854788966?text=${encodeURIComponent(mensaje)}`; // Reemplaza 1234567890 con tu número de WhatsApp
    window.open(url, '_blank');
}