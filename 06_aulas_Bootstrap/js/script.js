function filtrarProd(categoria) {

    let elementos = document.getElementsByClassName("area_produto"); // pega todas as div com essa classe

    console.log(elementos)
    
    for (let i = 0; i < elementos.length; i++) {
        //console.log(elementos[i].firstElementChild);
        console.log(elementos[i].firstElementChild.className);
        
        if (categoria == elementos[i].firstElementChild.className) {
            elementos[i].style = "display:inline-block";
        } else {
            elementos[i].style = "display:none"
        }
    }
}

let exibirTudo = () => {
    let elementos = document.getElementsByClassName("area_produto"); 

    for (let i = 0; i < elementos.length; i++) {

        elementos[i].style = "display:inline-block";

    }
} 

function mousedentro(imagem) {
    console.log(imagem);
    imagem.width = 350;
}

function mousefora(imagem){
    console.log(imagem);
    imagem.width = 200;
}

