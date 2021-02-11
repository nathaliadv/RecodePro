const connection = require('../config/connection');

class Mensagem {
    
    constructor(){
        this.nome;
        this.email;
        this.assunto;
        this.mensagem;
    }

    registrarMensagem(request, response){
        global.connection.collection('fale_conosco').insertOne({'nome':`${this.nome}`, 'email':`${this.email}`, 'assunto':`${this.assunto}`, 'mensagem': `${this.mensagem}`}, 
            (error, result) => {
                if (!error) {
                    return response.status(201).json({resultado: "Mensagem enviada com sucesso!"});
                } else {
                    return response.send(error);
                }
            }
        )
    };

};

module.exports = new Mensagem();