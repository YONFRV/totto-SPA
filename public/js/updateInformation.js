function aplicarEstilosDeshabilitados(label) {
    const span = label.querySelector('span');
    label.style.position = "absolute";
    label.style.transform = "translate(4%, -65%)";
    span.style.color = "black";
    span.style.backgroundColor = "#ffffff";
}
function aplicarEstilosSelectDeshabilitados(label) {
    const span = label.querySelector('span');
    label.style.position = "absolute";
    span.style.transform = "translate(4%, -65%)";
    span.style.color = "black";
    span.style.backgroundColor = "#ffffff";
}
function updateInformation(userData) {

    var formValidation = document.getElementById("information-email");
    formValidation.style.display = "none";

    var formValidation = document.getElementById("form-validation");
    formValidation.style.display = "none";

    var formValidation = document.getElementById("information-contac-general");
    formValidation.style.display = "none";
    
    var formValidation = document.getElementById("form-create-update");
    formValidation.style.display = "block";

    var formValidation = document.getElementById("form-validation");
    formValidation.style.display = "none";
    
    var emailCreateUpdate = document.getElementById("email-update-or-cerate");
    emailCreateUpdate.value = userData.email;
    emailCreateUpdate.disabled = true; 

    var documentUser= document.getElementById("document");
    documentUser.value = userData.document;
    documentUser.disabled = true; 
    aplicarEstilosDeshabilitados(documentUser.parentElement.querySelector('label'));

    
    var nameUser = document.getElementById("name");
    nameUser.value = userData.name;
    nameUser.disabled = true; 
    aplicarEstilosDeshabilitados(nameUser.parentElement.querySelector('label'));

    var surnameUser = document.getElementById("surname");
    surnameUser.value = userData.surname;
    surnameUser.disabled = true; 
    aplicarEstilosDeshabilitados(surnameUser.parentElement.querySelector('label'));

    var cellphoneUser = document.getElementById("cellphone");
    cellphoneUser.value = userData.cellphone;
    cellphoneUser.disabled = true; 
    aplicarEstilosDeshabilitados(cellphoneUser.parentElement.querySelector('label'));

    var departmentUser = document.getElementById("department");
    departmentUser.value = userData.department;
    departmentUser.disabled = true; 
    aplicarEstilosSelectDeshabilitados(departmentUser.parentElement.querySelector('label'));

    var cityUser = document.getElementById("city");
    cityUser.value = userData.city;
    cityUser.disabled = true; 
    aplicarEstilosSelectDeshabilitados(cityUser.parentElement.querySelector('label'));

    var birthdayUser = document.getElementById("birthday");
    birthdayUser.value = formatFecha(userData.birthday);
    aplicarEstilosDeshabilitados(birthdayUser.parentElement.querySelector('label'));
    var input = document.getElementById("input-create");
    var formx = document.getElementById('formUpdateCreate');
    if(userData.number_updates==1){
        birthdayUser.disabled = true; 
        input.value = "NO UPDATE";
        formx.removeAttribute("method");// Esto quita el atributo method del formulario
    }else{
        formx.onsubmit = function() {
            return updateUserDataForm();
        };
        formx.method = "post";
        input.value = "UPDATE";
    }

    var noRadioButtonHeHasChildren = document.getElementById("no_he_has_children");
    var siRadioButtonHeHasChildren = document.getElementById("si_he_has_children");

    if (userData.he_has_children == 0) {
        noRadioButtonHeHasChildren.checked = true;
        noRadioButtonHeHasChildren.disabled = true; 
        siRadioButtonHeHasChildren.checked = false;
        siRadioButtonHeHasChildren.disabled = true; 

    } else if (userData.he_has_children == 1) {
        noRadioButtonHeHasChildren.checked = false;
        noRadioButtonHeHasChildren.disabled = true; 
        siRadioButtonHeHasChildren.checked = true;
        siRadioButtonHeHasChildren.disabled = true; 
    }

    var genderMasculino = document.getElementById("gender_masculino");
    var genderFemenino = document.getElementById("gender_femenino");
    
    if (userData.gender == 'M') {
        genderMasculino.checked = true;
        genderMasculino.disabled = true; 
        genderFemenino.checked = false;
        genderFemenino.disabled = true; 

    } else if (userData.gender == 'F') {
        genderMasculino.checked = false;
        genderMasculino.disabled = true; 
        genderFemenino.checked = true;
        genderFemenino.disabled = true; 
    }

    var tycUpdateCheckbox = document.getElementById('tyc_update');
    tycUpdateCheckbox.checked = userData.data_treatment;
    tycUpdateCheckbox.disabled = true; 


    var dataTreatmentCheckbox = document.getElementById('data_treatment');
    dataTreatmentCheckbox.checked = userData.data_treatment;
    dataTreatmentCheckbox.disabled = true; 



}

function formatFecha(fecha) {
    const date = new Date(fecha);
    
    // Ajustar la zona horaria al formato UTC
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    const year = adjustedDate.getFullYear();
    const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = adjustedDate.getDate().toString().padStart(2, '0');

    return `${year}/${month}/${day}`;
}