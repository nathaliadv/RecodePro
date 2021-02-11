const connection = require('../config/connection');

class Produtos {

    getAll(request, response){
        global.connection.collection("produtos").find({}).toArray((error, result) => {
            if (!error) {
                return response.json(result);
            } else {
                return response.send(error);
            }
        });
    };
    
};

module.exports = new Produtos();