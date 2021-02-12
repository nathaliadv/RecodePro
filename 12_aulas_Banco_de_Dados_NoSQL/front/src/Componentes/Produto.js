import { Card, Button} from 'react-bootstrap';
import '../Estilos/Produto.css';

export default function Produto(props) {
    return (
        <Card className={props.categoria} key={props.id}>
            <Card.Img src={require(`./imgs/${props.imagem}`).default} variant="top" alt ="Imagem do produto" />
            <Card.Body>
                <Card.Title className="nome-produto">{props.descricao}</Card.Title>
                <Card.Text className="preco-antigo">R$ {props.preco}</Card.Text>
                <Card.Text className="preco-novo">R$ {props.precoVenda}</Card.Text>
                <Button variant="success" type="button" href="#" block>Confira</Button>
            </Card.Body>
        </Card>
    )
}