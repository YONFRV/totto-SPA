function updateUserDataForm() {
    var email = document.getElementById("email-update-or-cerate").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false;
    }
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
        var dia = parseInt(partesFecha[2], 10)
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
        updateUserService(email,birthday);
        return false;
}

function updateUserService(email,birthday) {
 // Configura la solicitud Fetch
 fetch('http://localhost/singelPageToto/public/index.php?ruta=update-user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email_update_or_cerate: email, birthday:birthday }),})
.then(response => response.json())
.then(data => {
    // Manejar la respuesta del servidor
    if (data.state) {
        Swal.fire({
            icon: 'success',
            title: '¡Has actualizado tu usuario!',
            text: 'Muchas gracias por tu actualización',
            confirmButtonText: 'ENTENDIDO',
            customClass: {
                confirmButton: 'mi-clase-boton'
            }
        });
        window.location.href = '/index.html'; 
        } else {
        Swal.fire({
            icon: 'error',
            title: '¡Error al actualizar usuario!',
            text: 'Error'
        }).then((result) => {
            // Redirigir a la página de inicio al hacer clic en "ENTENDIDO"
            if (result.isConfirmed) {
                window.location.href = '/index.html';
            }
        });
    }
})
.catch(error => {
    // Manejar errores de la solicitud Fetch
    console.error('Error en la solicitud Fetch:', error);
});
}
