<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossas Lojas - Full Stack Eletro</title>
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
            <h2>Nossas Lojas</h2>
            <hr> 
        </header>    
        
        
        <main>
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm"> 
                        <h3>Rio de Janeiro</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3207897533407!2d-43.18140948540049!3d-22.901535843440406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5ea64c95e9%3A0x71a4ca48f48906d7!2sAv.%20Pres.%20Vargas%2C%205000%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020091-000!5e0!3m2!1spt-BR!2sbr!4v1601990011311!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <p>Avenida Presidente  Vargas, 5000 - 10° andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                    </div>

                    <div class="col-sm"> 
                        <h3>São Paulo</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0878768273847!2d-46.65414678538372!3d-23.56528716762166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c785a26803%3A0x8b01afe046acf7be!2sAv.%20Paulista%2C%20985%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-100!5e0!3m2!1spt-BR!2sbr!4v1601990107585!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <p>Avenida Paulista, 985 - 3° andar</p>
                        <p>Jardins</p>
                        <p>(11) 4444-4444</p> 
                    </div>

                    <div class="col-sm">   
                        <h3>Santa Catarina</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.8201581375815!2d-51.15336868529124!3d-27.004238203531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e14e44508a293d%3A0x8133b666965631dd!2sR.%20Brasil%2C%20370%20-%20Centro%2C%20Videira%20-%20SC%2C%2089560-000!5e0!3m2!1spt-BR!2sbr!4v1601990223683!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <p>Rua Major Ávila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </div>
                </div>
            </div>
            <br>
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