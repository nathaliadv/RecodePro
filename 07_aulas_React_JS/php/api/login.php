<?php
    header("Access-Control-Allow-Origin:*");

    session_start();

    require_once('../actions/db_connect.php');
   
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    
    if(strlen($email) > 0 && strlen($senha) > 0){
        $select    = "SELECT * FROM cliente WHERE email = '$email' AND senha = '$senha';";
        $resultado = query($select);
        $num_row   = mysqli_num_rows($resultado);
        $row       = mysqli_fetch_array($resultado);
        
        if ($num_row == 1) {
            $_SESSION['idCliente'] = $row['idCliente'];
            //echo ("Usuário existente");
            echo json_encode(array('mensagem' => "Ok"));
        } else {
            echo json_encode(array('mensagem' => "Falha"));
        }

    }

     
?>