from flask import Flask, render_template, request
import requests
import json


app = Flask(__name__, template_folder="./src/views")

@app.route("/", methods=["GET"]) 
def main():
    return render_template("index.html")

@app.route("/send", methods=["POST"]) 
def send():
    if(request.method == "POST"):
    
        if (request.form["valorReal"] != "" and request.form["moeda"] != ""):

            valorReal = request.form["valorReal"]
            moeda = request.form["moeda"]
            
            url = 'https://economia.awesomeapi.com.br/all/' + moeda
            r = requests.get(url).json()

            code = moeda.rsplit('-',1)[0] #deixa só a primeira parte do nome da moeda

            valorCompra = r[code].get('bid')
            nomeMoeda = r[code].get('name')

            conversaoReal = round(float(valorReal)/float(valorCompra),2)

            resultado =  str(conversaoReal)
        
            return render_template('index.html',valorMoeda = resultado, nome = nomeMoeda)
        else:
            return render_template('index.html', mensagem = "Informe um valor válido para que a conversão seja feita")



@app.errorhandler(404)
def not_found(error):
    return render_template('error.html')

@app.errorhandler(405)
def not_found_method(error):
    return "O verbo escolhido não existe"


app.run(port=8080, debug=True)



"""
o @ executa a função que será passada embaixo. Quando o usuário acessar o / no navegador
a função abaixo será executada
em uma mesma rota pode-se passar vários métodos

Por padrão o render_template irá procurar a pasta templates. Se quiser especificar alguma pasta ou
diretório, passar como parâmetro no Flask(__name__, template_folder="")
""" 