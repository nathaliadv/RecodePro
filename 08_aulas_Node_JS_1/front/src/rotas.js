import { Switch, Route }from 'react-router-dom';
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Lojas from './Paginas/Lojas';
import Contatos from './Paginas/Contatos';


function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas } />
            <Route exact path="/contatos" component={ Contatos } />             
        </Switch>
    )
}

export default Rotas;
