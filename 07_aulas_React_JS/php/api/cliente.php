<?php
        header("Access-Control-Allow-Origin:*");
        require_once('../actions/db_connect.php');

        if($_SERVER['REQUEST_METHOD'] === 'GET'){
                echo json_encode(array('mensagem' => "Método GET Efetuado"));
        } else if ($_SERVER['REQUEST_METHOD'] === 'POST'){

                $nome = $_POST['nome'];
                $sobrenome = $_POST['sobrenome'];
                $cpf = $_POST['cpf'];
                $dataNascimento = $_POST['dataNascimento']; 
                $sexo = $_POST['sexo'];
                $telefone = $_POST['telefone'];
                $endereco = $_POST['endereco'];
                $numero = $_POST['numero'];
                $complemento = $_POST['complemento'];
                $cep = $_POST['cep'];
                $bairro = $_POST['bairro'];
                $cidade = $_POST['cidade'];
                $estado = $_POST['estado'];
                $email = $_POST['email'];
                $senha = $_POST['senha'];
                $checkOfertas = $_POST['checkOfertas'];
                $checkTermos = $_POST['checkTermos'];

                
                $select    = "SELECT * FROM cliente WHERE email = '$email' OR cpf = '$cpf' LIMIT 1;";
                $resultado = query($select);
                $num_row   = mysqli_num_rows($resultado);
                $row       = mysqli_fetch_array($resultado);
        
                if ($num_row == 0) {
                        $sql = "INSERT INTO cliente VALUES (null, '$nome', '$sobrenome', '$cpf', '$dataNascimento',
                        '$sexo', '$telefone', '$endereco', '$numero', '$complemento', '$cep', '$bairro', '$cidade',
                        '$estado', '$email', '$senha', '$checkOfertas', '$checkTermos');";
                        nonquery($sql);
                        echo json_encode(array('mensagem' => "Método POST Efetuado")); 
                } else {
                        echo json_encode(array('mensagem' => "Esse CPF e/ou e-mail já estão cadastrados"));
                }
 

        } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
                echo json_encode(array('mensagem' => "Método PUT Efetuado"));
        } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
                echo json_encode(array('mensagem' => "Método DELETE Efetuado"));
        } else {
                echo "Falha no processamento de dados. Método inválido.";
        }

        
        //Com o GET pode irá realizar uma consulta na tabela cliente
        //Com o POST ele irá cadastrar um novo cliente
        //Com o PUT fará uma atualização em alguma informação
        //Com o DELETE irá deletar alguma informação
        /*Assim, não precisa criar um arquivo PHP para cada uma das ações. Ele irá percorrer os IF e ELSE 
        e realizar apenas o que faz sentido*/


?>