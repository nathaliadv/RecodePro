<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/estilo.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container-sm">
        <header class="header">
            <!--Início do Menu--> 
            <nav class="navbar navbar-expand-sm navbar-dark">
                <a class="navbar-brand" href="index.php"><img class="logoFSE" src="./imgs/logo.png"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item"><a class="nav-link" href="./php/produtos.php">Produtos</a></li>
                        <li class="nav-item"><a class="nav-link" href="./php/loja.php">Nossas Lojas</a></li>
                        <li class="nav-item"><a class="nav-link" href="./php/contato.php">Fale Conosco</a></li>
                    </ul>
                </div>
            </nav>
            <!--Fim do Menu-->
        </header>

        
        <main class="pag_inicial">
            <div class="container p-5">
                <br>
                <h2>Seja bem vindo(a)!</h2>
                <p>Em nossas lojas <b><i>programadores têm desconto</i></b> nos produtos para sua casa!</p>
                <p>Clique na aba <b>Produtos</b> para conferir nossas ofertas!</p>
                <br>
                <br>
                <img src="./imgs/computer-man.png"> 
                <br>
                <br>
            </div>
        </main>

        <!--Roda-pé-->
        <footer class="rodape">
            <p><b>FORMAS DE PAGAMENTO</b></p>
            <img src="./imgs/forma-de-pagamento.png" alt="Imagem com diferentes formas de pagamento.">
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