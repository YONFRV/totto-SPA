

function creatauserDataForm() {
    var email = document.getElementById("email-update-or-cerate").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false;
    }
    var documentUser = document.getElementById("document").value;
  
    if (!/^\d+$/.test(documentUser)|| tieneLongitudMaxima(documentUser, 30)) {
        alert("Cédula/Identificación es de solo numeros.");
        return false;
    } 
    var name = document.getElementById("name").value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        // Mostrar un mensaje de error
        alert("El campo Nombres es de solo letras.");
        return false;
    } 
    var surname = document.getElementById("surname").value;
    if (!/^[a-zA-Z\s]+$/.test(surname)) {
        // Mostrar un mensaje de error
        alert("El campo Apellidos es de solo letras.");
        return false;
    } 
    var cellphone = document.getElementById("cellphone").value;
    if (!/^\d+$/.test(cellphone)|| tieneLongitudMaxima(cellphone, 20)) {
        alert("Número Móvil es de solo numeros.");
        return false;
    } 
    var department = document.getElementById("department").value;
    var city = document.getElementById("city").value;
    var birthday = document.getElementById("birthday").value;
    if (!/^\d{4}\/\d{2}\/\d{2}$/.test(birthday)) {
        // Intentar crear un objeto de fecha
        var fechaObj = new Date(birthday);
        // Verificar si el objeto de fecha es válido
        if (isNaN(fechaObj.getTime())) {
            alert("Fecha erronea");
            return false;
        } 
        alert("Formato de fecha erroneo");
        return false;
    }
        // Intentar crear un objeto de fecha
        var partesFecha = birthday.split('/');
        var anio = parseInt(partesFecha[0], 10);
        var mes = parseInt(partesFecha[1], 10);
        var dia = parseInt(partesFecha[2], 10);
        var fechaActual = new Date();
        var anioActual = fechaActual.getFullYear();
        var mesActual = fechaActual.getMonth() + 1; // Meses en JavaScript van de 0 a 11
        var diaActual = fechaActual.getDate();

        if (
            anio <= 1900 || anio >= 9999 ||
            mes <= 1 || mes > 12 ||
            dia <= 1 ||  // Días válidos para el mes y año especificados
            (anio === anioActual && mes === mesActual  && dia === diaActual) 
      
        ) {
            alert('Fecha inválida');
            return false;
        } 

    var tieneHijos = document.querySelector('input[name="he_has_children"]:checked');
    var genero = document.querySelector('input[name="gender"]:checked');    
    var tycUpdate = document.getElementById("tyc_update").value;
    var dataTreatment = document.getElementById("data_treatment").value;
    var userData = new userDataModal(email, documentUser, name, surname, cellphone, department, city, birthday, tieneHijos.value, genero.value, tycUpdate,0, dataTreatment);
    createUserService(userData);
    return false; 
}

function createUserService(userData) {

    // Configura la solicitud Fetch
    fetch('http://localhost/singelPageToto/public/index.php?ruta=create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.state) {
            Swal.fire({
                icon: 'success',
                title: '¡Has creado tu usuario!',
                text: 'Muchas gracias por tu ceración de usuario',
                confirmButtonText: 'ENTENDIDO',
                customClass: {
                    confirmButton: 'mi-clase-boton'
                }
            }).then((result) => {
                // Redirigir a la página de inicio al hacer clic en "ENTENDIDO"
                if (result.isConfirmed) {
                    window.location.href = '/index.html';
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Error al crear usuario!',
                text: 'Error'
            });
            window.location.href = '/index.html'; 

        }
    })
    .catch(error => {
        // Manejar errores de la solicitud Fetch
        console.error('Error en la solicitud Fetch:', error);
    });
}
function tieneLongitudMaxima(str, longitudMaxima) {
    return str.length >= longitudMaxima;
  }
  