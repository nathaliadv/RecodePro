<?php

    //faz consultas no BD
    function query($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "240691";
        $database = "FSEletro";
    
        $connect = mysqli_connect($servername, $username, $password, $database);
        if (!$connect) {
            die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
        } 
        $result = mysqli_query($connect, $sql);
        mysqli_close($connect);
        return $result;
    }

    //faz apenas modificações no BD (como insert e delete)
    function nonquery($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "240691";
        $database = "FSEletro";
    
        $connect = mysqli_connect($servername, $username, $password, $database);
        if (!$connect) {
            die("A conexão ao banco de dados falhou: ".mysqli_connect_error());
        } 
        $result = mysqli_query($connect, $sql);
        mysqli_close($connect);
    }
?>