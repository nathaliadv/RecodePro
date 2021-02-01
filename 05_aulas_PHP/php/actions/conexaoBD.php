<?php
    $servername = "localhost";
    $username = "root";
    $password = "240691";
    $database = "FSEletro";

    $con = mysqli_connect($servername, $username, $password, $database);

    if (!$con) {
        die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
    } 
?>