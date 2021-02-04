const connection = require('../config/connection');

class Produtos {

    getAll(request, response){
        connection.query("SELECT p.idProd, c.categoria, p.descricao, p.preco, p.precoVenda, p.imagem FROM categoria AS c INNER JOIN produto AS p ON c.idCategoria = p.categoria", (error, result) => {
            if (!error) {
                return response.json(result);
            } else {
                return response.send(error);
            }
        });
    };
    
};

module.exports = new Produtos();