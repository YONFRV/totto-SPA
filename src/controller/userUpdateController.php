<?php

require_once __DIR__ . '/../service/userUpdateService.php';
require_once __DIR__ . '/../model/response.php';


class userUpdateController {
    public function userProcessUpdate() {
        // Verifica si la solicitud es de tipo POST
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            // Lee el contenido en bruto como JSON
            $json_data = file_get_contents("php://input");
            // Decodifica los datos JSON
            $userUpdateService = new userUpdateService;
            $resultProcess=$userUpdateService->userUpdate($json_data);
            $reponse = new response();
            if($resultProcess){
                $reponse->state = true;
                $reponse->data = "User Actualizado";
            }else{
                $reponse->state = false;
                $reponse->data = "No se pudo Actualizar usuario";
            }
            echo json_encode($reponse);
        }
    }
}
