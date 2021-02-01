<?php
    require_once('./actions/conexaoBD.php');
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Full Stack Eletro</title>
    <link rel="stylesheet" href="../css/estilo.css">
    <script src="../js/script.js"></script>
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