type NumberOrString = string | number;

let total: NumberOrString = 20;
total = '30';

interface produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: produto) {
  document.body.innerHTML += `
  <h2>${dados.nome}</h2>
  <p>R$ ${dados.preco}</p>
  <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>`;
}

const computador: produto = {
  nome: 'Computador',
  preco: 5000,
  teclado: true,
};

const notebook: produto = {
  nome: 'Computador',
  preco: 5000,
  teclado: true,
};

preencherDados(computador);
preencherDados(notebook);
