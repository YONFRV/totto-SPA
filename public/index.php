<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Permite cualquier origen
header("Access-Control-Allow-Methods: POST"); // Permite solo métodos POST
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once __DIR__ . '/../src/controller/validationDataController.php';
require_once __DIR__ . '/../src/controller/userController.php';
require_once __DIR__ . '/../src/controller/userUpdateController.php';


// Obtén la ruta solicitada (si estás utilizando Apache, puedes usar mod_rewrite para ocultar "index.php")
$ruta = isset($_GET['ruta']) ? $_GET['ruta'] : '';

// Realiza el enrutamiento básico
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        switch ($ruta) {
            case 'validation-email':
                $validationDataController = new validationDataController();
                $validationDataController->validationData();
                break;
            case 'create-user':
                $userController = new userController();
                $userController->userProcess();
                break;
            case 'update-user':
                $userUpdateController = new userUpdateController();
                $userUpdateController->userProcessUpdate();
                break;
        }
        break;

    // Agrega más casos según sea necesario para manejar otras rutas
    default:
        // Si la ruta no está definida, sirve el frontend (formulario)
        include 'index.html';
        break;
}
