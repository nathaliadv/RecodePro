<?php
    require_once('./actions/conexaoBD.php');
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Full Stack Eletro</title>
    <script src="../js/script.js"></script>
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
            <h2>Produtos</h2>
            <hr> 
        </header>    
        
        
        <main class="opcoes_produtos">
            <section class="categorias">
                <h3>Categorias</h3>
                <ul> 
                    <li onclick="exibirTudo()">Mostrar tudo (12)</li>
                    <li onclick="filtrarProd('geladeira')">Geladeiras (3)</li>
                    <li onclick="filtrarProd('fogao')">Fogões (2)</li>
                    <li onclick="filtrarProd('microondas')">Micro-ondas (3)</li>
                    <li onclick="filtrarProd('lavadoraRoupas')">Lavadoras de roupas (2)</li>
                    <li onclick="filtrarProd('lavaLoucas')">Lava-louças (2)</li>
                </ul>
                <br>
                <br>
                <br>
            </section>

            <section class="produtos">

                <?php
                    $sql = "SELECT * FROM produto";
                    $result = $con->query($sql);
                    
                    if ($result->num_rows >0) {
                        while ($rows = $result->fetch_assoc()) {
                ?>

                    <div class="area_produto">
                        <div class="<?php echo $rows['categoria'];?>">
                            <img src="<?php echo $rows['imagem'];?>" width="200px" onmousemove="mousedentro(this)" onmouseout="mousefora(this)"><br>
                            <p class="descricao"><?php echo $rows["descricao"];?></p>
                            <hr>
                            <p class="descricao"><s>R$ <?php echo $rows["preco"];?></s></p>
                            <p class="preco_novo">R$ <?php echo $rows["precoVenda"];?></p>
                        </div>
                    </div>

                <?php
                        }
                    } else {
                        echo "Nenhum produto cadastrado.";
                    }
                    $con->close();
                ?>
            </section> 
        </main>
        <br><br><br>

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