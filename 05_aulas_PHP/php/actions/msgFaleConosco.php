<?php
    require_once('conexaoBD.php');

    if(isset($_POST['submit'])) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto']; 
        $msg = $_POST['mensagem'];
        
        $sql = "insert into fale_conosco(nome, email, assunto, mensagem) 
        values ('$nome', '$email', '$assunto', '$msg');";
        $result = $con->query($sql);
        

        if ($result) {
            echo ("<SCRIPT LANGUAGE='JavaScript'>
            window.alert('Mensagem enviada com sucesso!')
            window.location.href='../contato.php';
            </SCRIPT>");

        }

    }
?>
