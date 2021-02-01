import { combineReducers } from 'redux';
import produtos from './produtosReducer';
import carrinho from './carrinhoReducer';

const reducers = combineReducers({
    produtos,
    carrinho    
});

export default reducers;