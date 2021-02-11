const mongoClient = require("mongodb").MongoClient;
const connection = mongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true}, (error, conn) =>{
    if(error){
        return console.log(error);
    } else {
        global.connection = conn.db("FSEletro");
        console.log("Banco de dados conectado!");
    }
});

module.exports = connection;