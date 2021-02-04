import '../Estilos/Carrinho.css';
import {useDispatch} from 'react-redux'
import { Button } from 'react-bootstrap';

export default function CarrinhoComponente(props) {
    const dispatch = useDispatch();

    return (
        
        <tr key={props.id}>
            <td width="20%">
                <img className="imagemProduto" src={require(`./imgs/${props.imagem}`).default} alt="Imagem do produto"/>
            </td>
            <td width="20%" className="nomeProduto">{props.descricao}</td>
            <td width="20%" className="precoProduto">R$ {(props.precoVenda* props.quantidade).toFixed(2).replace('.',',')}</td>
            <td width="20%" className="quantidadeProduto">{props.quantidade}</td>
            <td width="20%">
                <Button type="button" className="btn-danger mx-2"
                    onClick={() => dispatch({type: "REMOVER_DO_CARRINHO", id: props.id})}
                >
                    X
                </Button>
                
                <Button type="button" className="btn-success mx-2" 
                    onClick={() => dispatch({type: "ADICIONAR_NO_CARRINHO", id: props.id})}
                >
                    +
                </Button>
            </td>
        </tr>
    )
}