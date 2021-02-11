import { CardColumns, Row, Col, ListGroup, Spinner} from 'react-bootstrap';
import { useState, lazy, Suspense } from 'react';
import {useSelector} from 'react-redux';
import '../Estilos/Loading.css';

//import Produto from '../Componentes/Produto';
const Produto = lazy(() => import('../Componentes/Produto'));

export default function Produtos()  {
    const produtos = useSelector(state => state.produtos);
    console.log(produtos);

    const [filtro, setFiltro] = useState("");
    console.log(filtro);

    function filtrar(e){ 
      setFiltro(e.target.id)
    }

    const mapeamento = produtos.map(item => { 
        if (filtro === item.categoria) {

            return (
                <Suspense fallback={<Spinner animation="border" variant="danger" />}>
                    <Produto categoria= {item.categoria} id={item.idProd} imagem={item.imagem} descricao={item.descricao} 
                    preco={item.preco} precoVenda={item.precoVenda}/>
                </Suspense>
            )
        }   
        else if (filtro === "") {
            return (
                <Suspense fallback={<Spinner animation="border" variant="danger" />}>
                    <Produto categoria= {item.categoria} id={item.idProd} imagem={item.imagem} descricao={item.descricao} 
                    preco={item.preco} precoVenda={item.precoVenda}/> 
                </Suspense>    
            )
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
                    </CardColumns>
                </Col>
            </Row>
        </div>
    );
}
