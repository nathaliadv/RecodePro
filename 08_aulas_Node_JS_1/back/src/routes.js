const { Router } = require('express');

const routes = new Router();

const ProdutoController = require('./controllers/ProdutosController');
const MensagemController = require('./controllers/MensagemController');

routes.get('/produtos', ProdutoController.produtoAction);

routes.post('/contatos', MensagemController.registrarMensagemAction);

module.exports = routes;


/* //array com os dados que serão enviados para o banco
let mensagem = [];
    
//puxando os dados para dentro desse array
mensagem.push(
    {
    nome: req.body.nome,
    email: req.body.email,
    assunto: req.body.assunto,
    mensagem: req.body.mensagem
    }
); */

