
<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../model/userData.php';

class userUpdateService {
    private $conexion;

    public function __construct() {
        global $conexion; 
        $this->conexion = $conexion;

        // Verifica la conexión
        if ($this->conexion->connect_error) {
            die("Error de conexión a la base de datos: " . $this->conexion->connect_error);
        }
    }
    public function userUpdate($dataUser) {
        $userData = json_decode($dataUser, true);
        $email =$userData['email_update_or_cerate'];
        $birthday =  $userData['birthday'];
        $process = "UPDATE `user_data` SET `birthday` = '$birthday',`number_updates` = '1' WHERE `user_data`.`email` = '$email'";
        // Ejecutar la consulta
          if ($this->conexion->query($process) == TRUE) {
            return  true;
        } else {
            return  false;
        }
    }

}