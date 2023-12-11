document.addEventListener('DOMContentLoaded', function() {
    // Llama a la función para restablecer los campos del formulario
    resetFormFields();

    // Otra opción: Agrega el evento directamente al botón de recarga (F5)
    window.addEventListener('beforeunload', function() {
        resetFormFields();
    });
});

function resetFormFields() {
    var form = document.getElementById('formValidation');
    form.reset();
    var form1 = document.getElementById('formUpdateCreate');
    form1.reset();
}