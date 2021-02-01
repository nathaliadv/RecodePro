export function adicionarNoCarrinho(id, quantidade) {
    type: "ADICIONAR_NO_CARRINHO",
    id,
    quantidade
};

export function removerDoCarrinho(id, quantidade) {
    type: "REMOVER_DO_CARRINHO",
    id,
    quantidade
};

export function limparCarrinho(quantidade) {
    type: "LIMPAR_O_CARRINHO",
    quantidade
};