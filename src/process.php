<?php

require_once "controller/validationDataController.php";

// Verifica si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Lee el contenido en bruto como JSON
    $json_data = file_get_contents("php://input");

    // Decodifica los datos JSON
    $data = json_decode($json_data, true);

    // Verifica si 'email' está presente en los datos decodificados
    if (isset($data["email"])) {
        // Obtén el correo electrónico de los datos decodificados
        $email = $data["email"];
        echo "Correo electrónico recibido: " . $email;


    } else {
        // Si 'email' no está presente en los datos decodificados, imprime un mensaje de error
        echo "Error: El campo 'email' no está presente en los datos JSON";
    }
} else {
    // Si la solicitud no es de tipo POST, devuelve un mensaje de error
    echo "Método no permitido";
}
?>
