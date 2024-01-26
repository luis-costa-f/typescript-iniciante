// classes

console.log(document.constructor);

class Produto {
    readonly tipo = 'produto';
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    getPreco() {
        return this.preco;
    }
}

const livro = new Produto('O Senhor dos Anéis', 100);

console.log(livro.nome);
console.log(livro);
