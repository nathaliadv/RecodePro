import { Card, Button, Row} from 'react-bootstrap';
import '../Estilos/Produto.css';
import {useDispatch} from 'react-redux';


export default function Produto(props) {

    const dispatch = useDispatch();

    return (
        <Card className={props.categoria} key={props.id}>
            <Card.Img src={require(`./imgs/${props.imagem}`).default} variant="top" alt ="Imagem do produto" />
            <Card.Body>
                <Card.Title className="nome-produto">{props.descricao}</Card.Title>
                <Card.Text className="preco-antigo">R$ {props.preco.toFixed(2).replace('.',',')}</Card.Text>
                <Card.Text className="preco-novo">R$ {props.precoVenda.toFixed(2).replace('.',',')}</Card.Text>
                <Row>
                    <Button className="mx-auto" variant="info" type="button" href="#">Saiba mais</Button>
                    <Button className="mx-auto" variant="success" type="button" 
                        onClick={() => dispatch({type: "ADICIONAR_NO_CARRINHO", id: props.id})} 
                    >
                        Adicionar ao carrinho
                    </Button>
                </Row>
            </Card.Body>
        </Card>
    )
}