<?php
    require_once('./actions/conexaoBD.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos - Full Stack Eletro</title>
    <link rel="stylesheet" href="../css/estilo.css">
</head>
<body>
    <header class="header">
    
        <!--Início do Menu--> 
        <nav>
            <img src="../imgs/logo.png" width="150px">
            <ul class="menu">
                <li><a href="../index.php">Página Inicial</a></li>
                <li><a href="./produtos.php">Produtos</a></li>
                <li><a href="./loja.php">Nossas Lojas</a></li>
                <li><a href="./contato.php">Fale Conosco</a></li>
            </ul>
        </nav>
        <!--Fim do Menu-->
    
        <h2>Contatos</h2>
        <hr> 
    </header>
    

    <main>    
        <section class="opcoes_contatos"> 
            <div>
                <img src="../imgs/email.png" width="50px">
                contato@fullstackeletro.com  
            </div>

            <div>
                <img src="../imgs/wpp.jpg" width="50px">
                (11) 99999-9999  
            </div>
        </section>
        <br>
        <br>

        <form class="form_msg" action='./actions/msgFaleConosco.php' method="post">
            <label for="name"><b>Nome:</b></label><br>
            <input type="text" name="nome" style="width: 400px;" placeholder="Digite seu nome completo"><br>
            <label for="email"><b>E-mail:</b></label><br>
            <input type="text" name="email" style="width: 400px;" placeholder="Digite seu e-mail"><br>
            <label for= "assunto"><b>Assunto:</b></label><br>
            <select name="assunto" id="assunto" style="width: 400px;">
                <option hidden disabled selected value>Escolha uma opção</option>
                <option value="crítica">Crítica</option>
                <option value="elogio">Elogio</option>
                <option value="informação">Informação</option>
                <option value="sugestão">Sugestão</option>
                <option value="outro">Outro</option>
            </select>
            <h4><label for="mensagem">Mensagem:</label></h4>
            <textarea name="mensagem" style="width: 400px;" placeholder="Máximo de 300 caracteres"></textarea><br><br>
            <input type="submit" name="submit" value="Enter">
        </form>
        <br>
        <br>

        <div class="comentarios">
            <h3>Mensagens</h3>

            <?php
                $sql = "select * from fale_conosco";
                $result = $con -> query($sql);
                
                if ($result -> num_rows > 0){
                    while($row = $result ->fetch_assoc()) {
                        echo "<div class='comentario' style='padding-left:20px;'>";
                        echo "Data: ".$row["data"]."<br>";
                        echo "Assunto: ".$row["assunto"]."<br>";
                        echo "Nome: ".$row["nome"]."<br>";
                        echo "Mensagem: ".$row["mensagem"]."<br><br>";
                        echo "</div>";
                    }
                }
            ?>

        </div>

    </main>

    <!--Roda-pé-->
    <footer class="rodape">
        <p><b>FORMAS DE PAGAMENTO</b></p>
        <img src="../imgs/forma-de-pagamento.png" alt="Imagem com diferentes formas de pagamento.">
        <br>
        <p><b>ACOMPANHE NAS REDES SOCIAIS</b></p>
        <a href="https://www.instagram.com/">Instagram</a> |
        <a href="https://www.facebook.com/">Facebook</a> |
        <a href="https://www.twitter.com/">Twitter</a>
        <p id="copyright">&copy;Nathalia Dantas - RecodePro</p>
    </footer>
</body>
</html>