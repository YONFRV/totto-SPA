<?php

require_once __DIR__ . '/../service/userCreateService.php';
require_once __DIR__ . '/../model/response.php';


class userController {
    public function userProcess() {
        // Verifica si la solicitud es de tipo POST
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            // Lee el contenido en bruto como JSON
            $json_data = file_get_contents("php://input");
            // Decodifica los datos JSON
            $userCreateService = new userCreateService;
            $resultProcess=$userCreateService->userCreate($json_data);
            $reponse = new response();
            if($resultProcess){
                $reponse->state = true;
                $reponse->data = "User creado";
            }else{
                $reponse->state = false;
                $reponse->data = "No se pudo crear usuario";
            }
            echo json_encode($reponse);
        }
    }
}
