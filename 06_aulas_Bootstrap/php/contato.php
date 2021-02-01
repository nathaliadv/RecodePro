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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container-sm">
        <header class="header">
        
            <!--Início do Menu--> 
            <nav class="navbar navbar-expand-sm navbar-dark">
                <a class="navbar-brand" href="../index.php"><img class="logoFSE" src="../imgs/logo.png"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item"><a class="nav-link" href="./produtos.php">Produtos</a></li>
                        <li class="nav-item"><a class="nav-link" href="./loja.php">Nossas Lojas</a></li>
                        <li class="nav-item"><a class="nav-link" href="./contato.php">Fale Conosco</a></li>
                    </ul>
                </div>
            </nav>
            <!--Fim do Menu-->
            <br>
            <h2>Fale Conosco</h2>
            <hr> 
        </header>
        

        <main>    
            <div class="container"> 
                <div class="row text-center">
                    <div class="col-sm">
                        <img src="../imgs/email.png" width="50px">
                        contato@fullstackeletro.com  
                    </div>

                    <div class="col-sm">
                        <img src="../imgs/wpp.jpg" width="50px">
                        (11) 99999-9999  
                    </div>
                </div>
            </div>
            <br>
            <br>

            <form  action='./actions/msgFaleConosco.php' method="post">
                <div class="form-group p-3">
                    <label for="name"><b>Nome:</b></label>
                    <input class="form-control" type="text" name="nome" placeholder="Digite seu nome completo">
                    <label for="email"><b>E-mail:</b></label>
                    <input class="form-control" type="text" name="email" placeholder="Digite seu e-mail">
                    <label for= "assunto"><b>Assunto:</b></label>
                    <select class="form-control" name="assunto" id="assunto">
                        <option hidden disabled selected value>Escolha uma opção</option>
                        <option value="crítica">Crítica</option>
                        <option value="elogio">Elogio</option>
                        <option value="informação">Informação</option>
                        <option value="sugestão">Sugestão</option>
                        <option value="outro">Outro</option>
                    </select>
                    <label for="mensagem"><b>Mensagem: </b></label>
                    <textarea class="form-control" name="mensagem" placeholder="Máximo de 300 caracteres"></textarea><br>
                    <input class="btn-primary" type="submit" name="submit" value="Enter">
                </div>
            </form>
            <br>
            <br>

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
    </div>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>