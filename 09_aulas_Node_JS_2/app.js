const express = require('express');
const bodyParser = require('body-parser');
const buscaDados = require('./src/functions/buscaDados');
const buscaDadosPais = require('./src/functions/buscaDadosPais');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './src/views/');

//rota de visualização
app.get("/", (req, res) => {
    res.render("index")
})

app.post("/envia-estado", async (req, res) => {
    
    const { uf } = req.body;
    const covid = await buscaDados(uf);


    res.render('resultado', {covid: covid});  

})

app.post("/envia-pais", async (req, res) => {
    
    const { country } = req.body;
    console.log(country)
    const covidPais = await buscaDadosPais(country);
    console.log(covidPais.data)


    res.render('resultadoPais', {covidPais: covidPais.data});  

})

app.listen(3333);