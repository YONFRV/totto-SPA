// Función para aplicar estilos al label y span
function aplicarEstilos(input) {
    const valorActual = input.value.trim();
    const label = input.parentElement.querySelector('label');
    const span = label.querySelector('span');
    if (valorActual) {
        label.style.position = "absolute";
        label.style.transform = "translate(4%, -65%)";
        span.style.color = "black";
        span.style.backgroundColor = "#ffffff";
    } else {
        // Restablecer estilos si el valor está vacío
        label.style.position = "";
        label.style.transform = "";
        span.style.color = "";
        span.style.backgroundColor = "";
    }
}

// Obtener todos los elementos .cotainer-inputs
const containers = document.querySelectorAll('.cotainer-inputs');

// Agregar el evento input a cada input dentro de los contenedores
containers.forEach(function(container) {
    const input = container.querySelector('input');
    input.addEventListener('input', function() {
        aplicarEstilos(input);
    });
});



// Función para aplicar estilos al .cotainer-inputs con select
function aplicarEstilosSelect(container) {
    const select = container.querySelector('select');
    const valorActual = select.value.trim();
    const label = container.querySelector('label');
    const span = label.querySelector('span');
    
    if (valorActual) {
        label.style.position = "absolute";
        label.style.transform = "translate(4%, -65%)";
        span.style.color = "black";
        span.style.backgroundColor = "#ffffff";
    } 
}


// Obtener todos los elementos .select-container con select
const selectContainers = document.querySelectorAll('.select-container');

// Función para loguear el contenido de las opciones seleccionadas
function logOpcionesSeleccionadas(select) {
    const container = select.closest('.select-container');
    const label = container.querySelector('label');
    const span = label.querySelector('span');
    // Verificar si hay una opción seleccionada con valor
    if (select.value.trim() !== '') {
        span.style.position = "absolute";
        span.style.transform = "translate(4%, -65%)";
        span.style.color = "black";
        span.style.backgroundColor = "#ffffff";
    }
}

// Agregar el evento change a cada select dentro de los contenedores
selectContainers.forEach(function(container) {
    const select = container.querySelector('select');

    // Llamar a la función cuando se produce un cambio en el select
    select.addEventListener('change', function() {
        logOpcionesSeleccionadas(select);
    });

    // También llamar a la función para verificar las opciones seleccionadas al cargar la página
    logOpcionesSeleccionadas(select);
});
