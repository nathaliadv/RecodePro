<?php

    require_once('../actions/db_connect.php');    
    header("Access-Control-Allow-Origin:*");
    
    $sql = "SELECT p.idProd, c.categoria, p.descricao, p.preco, p.precoVenda, p.imagem 
            FROM categoria AS c INNER JOIN produto AS p ON c.idCategoria = p.categoria;";
    $result = query($sql);
    $produto = [];

    if ($result->num_rows >0) {
        while ($rows = mysqli_fetch_assoc($result)) {
            $produto[] = $rows;
        }
    }


    echo json_encode($produto);

?>
