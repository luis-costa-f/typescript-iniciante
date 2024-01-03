type TProduto = {
    preco: number;
};

type Carro = {
    rodas: number;
    portas: number;
};

function handleProdutoCarro(dados: TProduto & Carro) {
    dados.preco;
    dados.portas;
    dados.rodas;
}
