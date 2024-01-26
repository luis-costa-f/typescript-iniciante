"use strict";
// classes
console.log(document.constructor);
class Produto {
    tipo = 'produto';
    nome;
    preco;
    constructor(nome, preco) {
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
