const produtos = require('../models/Produtos');

class ProdutosController {
  produtoAction(require, response) {
    produtos.getAll(require, response);
  }
};

module.exports = new ProdutosController();