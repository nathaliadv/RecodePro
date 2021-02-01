import { combineReducers } from 'redux';
import produtos from './produtosReducer';
import carrinho from './carrinhoReducer';

export default combineReducers({
    produtos,
    carrinho    
});