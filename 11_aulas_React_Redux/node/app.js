const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '240691',
    database: 'FSEletro'
});

app.get('/', (req, res, next) => {

    connect.query("SELECT p.idProd, c.categoria, p.descricao, p.preco, p.precoVenda, p.imagem FROM categoria AS c INNER JOIN produto AS p ON c.idCategoria = p.categoria", (error, result) => {
        res.json(result);
    })
})


app.post('/mensagem', (req,res) => {

    //array com os dados que serão enviados para o banco
    let dados = [];

    //puxando os dados para dentro desse array
    dados.push(
        {
        nome: req.body.nome,
        email: req.body.email,
        assunto: req.body.assunto,
        mensagem: req.body.mensagem
        }
    );

    connect.query('INSERT INTO fale_conosco SET?', dados, () =>  {
        dados = []; //resetar o array
        return res.json( {resultado: "Dados enviados com sucesso!"})
    })

});

//criar servidor do node
app.listen(1910, ()=> {
    console.log('O servidor está funcionando na porta 1910')
})
