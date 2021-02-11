const { Router } = require('express');

const routes = new Router();


const MensagemController = require('./controllers/MensagemController');



routes.post('/contatos', MensagemController.registrarMensagemAction);

module.exports = routes;



