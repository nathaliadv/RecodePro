const connection = require('../config/connection');

class Mensagem {
    
    constructor(){
        this.nome;
        this.email;
        this.assunto;
        this.mensagem;
    }

    registrarMensagem(request, response){
        connection.query(
            `INSERT INTO fale_conosco (nome, email, assunto, mensagem) VALUES ('${this.nome}', '${this.email}', '${this.assunto}', '${this.mensagem}')`, 
            (error, result) => {
                if (!error) {
                    return response.json({resultado: "Mensagem enviada com sucesso!"});
                } else {
                    return response.status(201).send("Mensagem enviada com sucesso!");
                }
            }
        )
    };

};

module.exports = new Mensagem();