const express = require('express');
const cors = require('cors');

const routes = require('./routes'); //importar arquivo usa o ./ na frente


class App {

    constructor(){
        this.server = express();
        this.middlewares (); //ele irá chamar esse método quando o objeto app for instaciado
        this.routes(); //ele irá chamar esse método quando o objeto app for instaciado
    };

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        //adicionar aqui todos os middlewares
    };

    routes() {
        this.server.use(routes);
    };

}
const app = new App();

module.exports = app.server;

//quando o arquivo app.js for importado, estará sendo importado o app.server 
//(que é o atributo: server= express())

