// Array para almacenar el inventario
let inventario = [];

// Función para registrar un portátil
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Verificar si el producto ya existe en el inventario
    const existente = inventario.find(item => item.marca === marca && item.modelo === modelo);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        inventario.push({ marca, modelo, cantidad });
    }

    alert('Portátil registrado exitosamente');
    document.getElementById('registroForm').reset();
});

// Función para vender un portátil
document.getElementById('ventaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('ventaMarca').value;
    const cantidad = parseInt(document.getElementById('ventaCantidad').value);

    const producto = inventario.find(item => item.marca === marca);
    if (producto && producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        alert(`Se vendieron ${cantidad} unidades de ${marca}`);
    } else {
        alert('No hay suficiente stock');
    }

    document.getElementById('ventaForm').reset();
});

// Función para prestar un portátil
document.getElementById('prestamoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('prestamoMarca').value;
    const cantidad = parseInt(document.getElementById('prestamoCantidad').value);

    const producto = inventario.find(item => item.marca === marca);
    if (producto && producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        alert(`Se prestaron ${cantidad} unidades de ${marca}`);
    } else {
        alert('No hay suficiente stock');
    }

    document.getElementById('prestamoForm').reset();
});

// Función para registrar reparación de un portátil
document.getElementById('reparacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('reparacionMarca').value;
    const cantidad = parseInt(document.getElementById('reparacionCantidad').value);

    const producto = inventario.find(item => item.marca === marca);
    if (producto && producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        alert(`Se registraron ${cantidad} unidades de ${marca} para reparación`);
    } else {
        alert('No hay suficiente stock para reparación');
    }

    document.getElementById('reparacionForm').reset();
});
