<?php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../model/userData.php';


class validationDataService {


    private $conexion; // Guarda la conexión MySQL aquí

    public function __construct() {
        // Configura la conexión a la base de datos en el constructor
        global $conexion; // Usa la conexión definida en el archivo db.php
        $this->conexion = $conexion;

        // Verifica la conexión
        if ($this->conexion->connect_error) {
            die("Error de conexión a la base de datos: " . $this->conexion->connect_error);
        }
    }

    public function validationEmail($email) {
        // Consulta SQL para verificar si el correo electrónico existe
        $consulta = "SELECT * FROM user_data WHERE email = '$email'";
        $resultado = $this->conexion->query($consulta);
        if ($resultado->num_rows > 0) {
            $fila = $resultado->fetch_assoc();

            // Crea una instancia del modelo UserDataModel con los datos de la fila
        $modelo = new UserData(
            $fila['email'],
            $fila['document'],
            $fila['name'],
            $fila['surname'],
            $fila['cellphone'],
            $fila['department'],
            $fila['city'],
            $fila['birthday'],
            $fila['he_has_children'],
            $fila['gender'],
            $fila['tyc_update'],
            $fila['data_treatment'],
            $fila['number_updates'],
            $fila['create_at'],
            $fila['update_at']
        );

        return $modelo;       
        } 
        else {
            return null; // El correo electrónico NO existe
        }
    }
}
?>