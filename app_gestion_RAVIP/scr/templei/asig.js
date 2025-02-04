

// Array para almacenar el inventario de portátiles
let inventario = [];

// Función para registrar un portátil en el inventario
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const existente = inventario.find(item => item.marca === marca && item.modelo === modelo);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        inventario.push({ marca, modelo, cantidad, partes: [] });
    }

    alert('Portátil registrado exitosamente');
    document.getElementById('registroForm').reset();
});

// Función para asignar partes a un portátil
document.getElementById('asignarPartesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('marcaAsignar').value;
    const modelo = document.getElementById('modeloAsignar').value;
    const parte = document.getElementById('parteAsignar').value;
    const cantidad = parseInt(document.getElementById('cantidadParte').value);

    // Buscar el portátil en el inventario
    const producto = inventario.find(item => item.marca === marca && item.modelo === modelo);
    
    if (producto) {
        // Verificar si la parte ya está asignada a este portátil
        const parteExistente = producto.partes.find(p => p.parte === parte);
        
        if (parteExistente) {
            // Si la parte ya existe, sumamos la cantidad
            parteExistente.cantidad += cantidad;
        } else {
            // Si la parte no existe, la agregamos al inventario de partes
            producto.partes.push({ parte, cantidad });
        }

        alert(`Parte ${parte} asignada exitosamente al portátil ${marca} ${modelo}`);
    } else {
        alert('Portátil no encontrado en el inventario');
    }

    document.getElementById('asignarPartesForm').reset();
});
