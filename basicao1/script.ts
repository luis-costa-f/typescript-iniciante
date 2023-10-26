let produto = "livro";
let preco = 200;

const carro: {
    marca: string;
    portas: number;
} = {
    marca: "audi",
    portas: 5,
};

const barato = preco < 400 ? true : "produto caro";


function somar (a: number, b: number): number {
    return a + b;
}

somar(4, 5);

// somar(4, "4");

const nintendo = {
    nome: "Nintendo",
    preco: "2000"
}

function transformarPreco (produto: {nome: string; preco: string}) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}

const produtoNovo = transformarPreco(nintendo)

console.log(produtoNovo)




