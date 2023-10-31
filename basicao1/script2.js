"use strict";
let total = 20;
total = '30';
function preencherDados(dados) {
    document.body.innerHTML += `
  <h2>${dados.nome}</h2>
  <p>R$ ${dados.preco}</p>
  <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>`;
}
const computador = {
    nome: 'Computador',
    preco: 5000,
    teclado: true,
};
const notebook = {
    nome: 'Computador',
    preco: 5000,
    teclado: true,
};
preencherDados(computador);
preencherDados(notebook);
