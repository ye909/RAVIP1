const btnAnexo = document.getElementById('btnAnexo');
const btnDescripcion = document.getElementById('btnDescripcion');
const btnInforme = document.getElementById('btnInforme');
const tablaContainer = document.getElementById('tablaContainer');

// Datos de ejemplo (reemplaza con tus datos reales)
const datosAnexo = [
    ['Columna 1', 'Columna 2', 'Columna 3'],
    ['Dato 1', 'Dato 2', 'Dato 3'],
    ['Otro dato 1', 'Otro dato 2', 'Otro dato 3']
];

// Funciones para crear las tablas
function crearTabla(datos) {
    const tabla = document.createElement('table');
    for (let i = 0; i < datos.length; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < datos[i].length; j++) {
            const celda = document.createElement('td');
            celda.textContent = datos[i][j];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

// Manejadores de eventos para los botones
btnAnexo.addEventListener('click', () => {
    tablaContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la nueva tabla
    tablaContainer.appendChild(crearTabla(datosAnexo));
});

// Similarmente, agrega manejadores de eventos para los otros botones y define los datos para Descripción e Informe