import { Switch, Route }from 'react-router-dom';
import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Login from './Paginas/Login';
import Lojas from './Paginas/Lojas';
import Contatos from './Paginas/Contatos';
import Cadastro from './Paginas/Cadastro';


function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas } />
            <Route exact path="/contatos" component={ Contatos } />             
            <Route exact path="/login" component={ Login } />
            <Route exact path="/cadastro" component={ Cadastro } />
        </Switch>
    )
}

export default Rotas;
