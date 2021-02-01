<?php
        header("Access-Control-Allow-Origin:*");
        require_once('../actions/db_connect.php');

        if($_SERVER['REQUEST_METHOD'] === 'GET'){
                echo json_encode(array('mensagem' => "Método GET Efetuado"));
        } else if ($_SERVER['REQUEST_METHOD'] === 'POST'){

                $nome = $_POST['nome'];
                $email = $_POST['email'];
                $assunto = $_POST['assunto'];
                $mensagem = $_POST['mensagem'];
              
                
                $sql = "INSERT INTO fale_conosco(nome, email, assunto, mensagem) 
                values ('$nome', '$email', '$assunto', '$mensagem');";
                
                nonquery($sql);

                echo json_encode(array('mensagem' => "Método POST Efetuado")); 
                  
                
        } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
                echo json_encode(array('mensagem' => "Método PUT Efetuado"));
        } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
                echo json_encode(array('mensagem' => "Método DELETE Efetuado"));
        } else {
                echo "Falha no processamento de dados. Método inválido.";
        }
