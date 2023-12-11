function crerateUser(email) {
    var formValidation = document.getElementById("information-email");
    formValidation.style.display = "none";

    var formValidation = document.getElementById("form-validation");
    formValidation.style.display = "none";

    var formValidation = document.getElementById("information-contac-general");
    formValidation.style.display = "none";
    
    var formValidation = document.getElementById("form-create-update");
    formValidation.style.display = "block";

    var form = document.getElementById('formUpdateCreate');
    form.reset();
    form.onsubmit = function() {
        return creatauserDataForm();
    };
    form.method = "post";

    var emailCreateUpdate = document.getElementById("email-update-or-cerate");
    emailCreateUpdate.value = email;
 // Obtener la etiqueta asociada al input
 var label = emailCreateUpdate.nextElementSibling;

 // Aplicar estilos directamente a la etiqueta
 label.style.transform = "translate(4%, -65%)";
 label.style.color = "black";


    var input = document.getElementById("input-create");
    input.value = "CREATE";
}
