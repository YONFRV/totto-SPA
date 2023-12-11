<?php
// Archivo de configuración de la base de datos

// Detalles de conexión a la base de datos
$host = "TuBaseDeDatos";
$usuario = "TuBaseDeDatos";
$contrasena = "";
$base_de_datos = "TuBaseDeDatos";
$puerto = "3306";
// Crear la conexión
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos, $puerto);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}
?>
