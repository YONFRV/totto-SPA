function validarFormulario() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return true;
    }
    enviarFormulario();
    var form = document.getElementById('formValidation');
    form.reset();
    return false;
}

function enviarFormulario() {
    // Obtén el valor del campo de correo electrónico
    var email = document.getElementById("email").value;

    // Configura la solicitud Fetch
    fetch('http://localhost/singelPageToto/public/index.php?ruta=validation-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.state) {
            var userData = data.data;
            updateInformation(userData);
        } else {
            crerateUser(email);
        }
    })
    .catch(error => {
        // Manejar errores de la solicitud Fetch
        console.error('Error en la solicitud Fetch:', error);
    });
}