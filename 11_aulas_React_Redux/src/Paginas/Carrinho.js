import CarrinhoComponente from '../Componentes/CarrinhoComponente';
import {Container, Table} from 'react-bootstrap'
import {useSelector} from 'react-redux';
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
        </Container>
    );
}
