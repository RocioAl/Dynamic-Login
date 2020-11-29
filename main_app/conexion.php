




<?php
$mysqli = @new mysqli('localhost', '', '', '');


if ($mysqli->connect_error) {
    echo('Error de conexión: ' . $mysqli->connect_error);
}
?>