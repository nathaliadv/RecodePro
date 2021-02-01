import CarrinhoComponente from '../Componentes/CarrinhoComponente';
import {Container, Table, Button, Row, Col} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import '../Estilos/Carrinho.css';


export default function Carrinho()  {
    const carrinho = useSelector(status => status.carrinho.filter(item => {
        return item.quantidade > 0
    }));
    console.log(carrinho)


    const mapeamento = carrinho.map(item => {
        return <CarrinhoComponente id={item.idProd} imagem={item.imagem} descricao={item.descricao} 
        precoVenda={item.precoVenda} quantidade={item.quantidade}/> 
    });

    const valorTotal = useSelector(state => 
        state.carrinho.reduce((acc,cur) =>{
           return acc + (cur.precoVenda* cur.quantidade);
    }, 0));

    const dispatch = useDispatch();

    return (
        <Container>
            <h3 className="my-5">Carrinho de Compras</h3>
            <Table className="text-center">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {mapeamento} 
                </tbody>
            </Table>
            <Container className="text-right my-5">
                <h4 >Valor total da compra: R$ {valorTotal.toFixed(2).replace('.',',')}. </h4>
                <Row className="mt-3">
                    <Col className="mr-auto">
                        <Button type="button" variant="warning" className="mx-1"
                            onClick={() => dispatch({type:"LIMPAR_O_CARRINHO"})}
                        >Limpar carrinho</Button>
                        <Button type="submit" variant="primary" className="mx-1">Finalizar compra</Button>
                    </Col>
                    
                </Row>
            </Container>

        </Container>
    );
}
