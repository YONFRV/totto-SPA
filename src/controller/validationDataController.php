<?php

require_once __DIR__ . '/../service/validationDataService.php';
require_once __DIR__ . '/../model/response.php';


class validationDataController {
    
    public function validationData() {
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
                $validation = new validationDataService();
                $resultado =  $validation->validationEmail($email); // Corrección 
                $reponse = new response();
                if($resultado != null){
                    $reponse->state = true;
                    $reponse->data = $resultado;
                }else{
                    $reponse->state = false;
                    $reponse->data = null;
                }
                echo json_encode($reponse);
            } 
            else {
                // Si 'email' no está presente en los datos decodificados, imprime un mensaje de error
                echo json_encode(["error" => "El campo 'email' no está presente en los datos JSON"]);
            }
        } else {
            // Si la solicitud no es de tipo POST, devuelve un mensaje de error
            echo json_encode(["error" => "Método no permitido"]);
        }
    }
}
?>
