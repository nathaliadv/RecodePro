const { Router } = require('express');

const routes = new Router();

const ProdutoController = require('./controllers/ProdutosController');
const MensagemController = require('./controllers/MensagemController');

routes.get('/produtos', ProdutoController.produtoAction);

routes.post('/contatos', MensagemController.registrarMensagemAction);

module.exports = routes;



