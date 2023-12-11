<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../model/userData.php';

class UserCreateService {
    private $conexion;

    public function __construct() {
        global $conexion; 
        $this->conexion = $conexion;

        // Verifica la conexión
        if ($this->conexion->connect_error) {
            die("Error de conexión a la base de datos: " . $this->conexion->connect_error);
        }
    }

    public function userCreate($dataUser) {
        $userData = json_decode($dataUser, true);
        // Escapar y formatear los valores para evitar inyecciones SQL
        $email = mysqli_real_escape_string($this->conexion, $userData['email_update_or_cerate']);
        $document = mysqli_real_escape_string($this->conexion, $userData['document']);
        $name = mysqli_real_escape_string($this->conexion, $userData['name']);
        $surname = mysqli_real_escape_string($this->conexion, $userData['surname']);
        $cellphone = mysqli_real_escape_string($this->conexion, $userData['cellphone']);
        $department = mysqli_real_escape_string($this->conexion, $userData['department']);
        $city = mysqli_real_escape_string($this->conexion, $userData['city']);
        $birthday = mysqli_real_escape_string($this->conexion, $userData['birthday']);
        $he_has_children = mysqli_real_escape_string($this->conexion, $userData['he_has_children']);
        $gender = mysqli_real_escape_string($this->conexion, $userData['gender']);
        $tyc_update = mysqli_real_escape_string($this->conexion, $userData['tyc_update']);
        $data_treatment = mysqli_real_escape_string($this->conexion, $userData['data_treatment']);
    
        $process = "INSERT INTO `user_data` (`email`, `document`, `name`, `surname`, `cellphone`, `department`, `city`, `birthday`, `he_has_children`, `gender`, `tyc_update`, `data_treatment`, `create_at`, `update_at`) 
                    VALUES ('$email', '$document', '$name', '$surname', '$cellphone', '$department', '$city', '$birthday', '$he_has_children', '$gender', '$tyc_update', '$data_treatment', current_timestamp(), current_timestamp())";
        
        $checkUserQuery = "SELECT COUNT(*) as count FROM `user_data` WHERE `email` = '$email'";
        $checkUserResult = $this->conexion->query($checkUserQuery);
    
        if ($checkUserResult && $checkUserResult->fetch_assoc()['count'] > 0) {
            return  false;
        }
        
        // Ejecutar la consulta
        if ($this->conexion->query($process) == TRUE) {
            return  true;
        } else {
            return  false;
        }
    }
}
