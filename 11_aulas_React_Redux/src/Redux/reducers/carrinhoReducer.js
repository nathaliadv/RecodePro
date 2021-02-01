import produtos from './produtos';

//aqui, além de trazer os dados do arquivo produtos, precisa ser criado o campo quantidade
const initialState = produtos.map(item => ({...item, quantidade: 0}));

export default (state = initialState, action) => {
    switch(action.type) {

        case "ADICIONAR_NO_CARRINHO":
            return state.map((item) => {
                item.id === action.id && item.quantidade++;
                return console.log(item.id);
            });
        
        case "REMOVER_DO_CARRINHO":
            return state.map((item) => {
                item.id === action.id && item.quantidade--;
                return item
            });            

        case "LIMPAR_O_CARRINHO":
            return state;
        
        default:
            return state;
    }

}
