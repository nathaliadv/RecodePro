const Mensagem = require('../models/Mensagem');

class MensagemController {
    //funções dentro do controller é chamada de Action (e não Métodos);

    registrarMensagemAction(request, response) {
        const { nome, email, assunto, mensagem } = request.body;

        Mensagem.nome = nome;
        Mensagem.email = email;
        Mensagem.assunto = assunto;
        Mensagem.mensagem = mensagem;
        Mensagem.registrarMensagem(request, response);

    };
    
};

module.exports = new MensagemController();

