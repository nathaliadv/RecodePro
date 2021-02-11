import { Switch, Route }from 'react-router-dom';
import {lazy, Suspense} from 'react';
import './Estilos/Loading.css';
/* import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Lojas from './Paginas/Lojas';
import Contatos from './Paginas/Contatos';
import Carrinho from './Paginas/Carrinho'; */

const Home = lazy(() => import('./Paginas/Home'));
const Produtos = lazy(() => import('./Paginas/Produtos'));
const Lojas = lazy(() => import('./Paginas/Lojas'));
const Contatos = lazy(() => import('./Paginas/Contatos'));
const Carrinho = lazy(() => import('./Paginas/Carrinho'));



function Rotas() {
    return(
        <Switch>
            <Suspense fallback={ <h1 class="carregando">Carregando...</h1> }>
                <Route exact path="/" component={ Home } />
                <Route exact path="/produtos" component={ Produtos } />
                <Route exact path="/lojas" component={ Lojas } />
                <Route exact path="/contatos" component={ Contatos } />    
                <Route exact path="/carrinho" component={ Carrinho } />
            </Suspense>          
        </Switch>
    )
}

export default Rotas;
