import Produto from '../Componentes/Produto';
import Categoria from '../Componentes/Categoria';
import { CardColumns, Row, Col, ListGroup} from 'react-bootstrap';
import { useState, useEffect } from 'react';


export default function Produtos()  {
    const [ produtos, setProdutos] = useState([]);

    useEffect( () => {
        async function pegaProdutos(){
            const url = "http://localhost/Recode/7_aulas_React_JS/php/api/produtos.php/";
            const resposta = await fetch(url);
            const dados = await resposta.json();
            setProdutos(dados);   
        }  
        pegaProdutos();    
    }, []);


    const [filtro, setFiltro] = useState("");
    console.log(filtro);

    function filtrar(e){ 
      setFiltro(e.target.id)
    }

    const mapeamento = produtos.map(item => { 
        if (filtro === item.categoria) {

        return <Produto categoria= {item.categoria} id={item.idProd} imagem={item.imagem} descricao={item.descricao} 
            preco={item.preco} precoVenda={item.precoVenda}/>
         }   
        else if (filtro === "") {
            return <Produto categoria= {item.categoria} id={item.idProd} imagem={item.imagem} descricao={item.descricao} 
            preco={item.preco} precoVenda={item.precoVenda}/>            
        }
    })

    return (
        <div>
            <h3 className="my-5">Produtos</h3>
            <Row>
                <Col sm={2} className="coluna-categorias">
                    <ListGroup variant="flush" className= "categorias">
                        <ListGroup.Item action variant="light" id="" onClick={filtrar}>Mostrar tudo</ListGroup.Item>
                        <ListGroup.Item action variant="light" id="geladeira" onClick={filtrar}>Geladeiras</ListGroup.Item>
                        <ListGroup.Item action variant="light" id="fogao" onClick={filtrar}>Fogões</ListGroup.Item>
                        <ListGroup.Item action variant="light" id="microondas" onClick={filtrar}>Micro-ondas</ListGroup.Item>
                        <ListGroup.Item action variant="light" id="lavadoraRoupas" onClick={filtrar}>Lavadoras de roupas</ListGroup.Item>
                        <ListGroup.Item action variant="light" id="lavaLoucas" onClick={filtrar}>Lava-louças</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={10} className="coluna-produtos">
                    <CardColumns className="text-center">
                        {mapeamento}
                        {/*{produtos && produtos.map(item => 
                            < Produto categoria= {item.categoria} 
                            id={item.idProd} imagem= {item.imagem} descricao= {item.descricao} preco= {item.preco} 
                            precoVenda= {item.precoVenda} />
                        )}*/}
                    </CardColumns>
                </Col>
            </Row>
        </div>
    );
}