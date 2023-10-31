function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'Value deve ser um número ou uma string!';
  }
}

console.log(toNumber('3'));

////////////////////////////////////"""Desafio"

// const input = document.querySelector('input');

// const total = localStorage.getItem('total');
// if (input && total) {
//   input.value = total;
//   calcularGanho(Number(input.value));
// }

// function calcularGanho(value: number) {
//   const p = document.querySelector('p');
//   if (p) p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
// }

// function totalMudou() {
//   if (input) {
//     localStorage.setItem('total', input.value);
//     calcularGanho(Number(input.value));
//   }
// }

// if (input) {
//   input.addEventListener('keyup', totalMudou);
// }

/// -----------------------------------------------
// function normalizarTexto(texto: string): string {
//     return texto.trim().toLowerCase();
// }

// console.log(normalizarTexto("        DesiNG "))

/// Aula 30/10

// let produto = "livro";
// let preco = 200;

// const carro: {
//     marca: string;
//     portas: number;
// } = {
//     marca: "audi",
//     portas: 5,
// };

// const barato = preco < 400 ? true : "produto caro";

// function somar (a: number, b: number): number {
//     return a + b;
// }

// somar(4, 5);

// // somar(4, "4");

// const nintendo = {
//     nome: "Nintendo",
//     preco: "2000"
// }

// function transformarPreco (produto: {nome: string; preco: string}) {
//     produto.preco = "R$ " + produto.preco;
//     return produto;
// }

// const produtoNovo = transformarPreco(nintendo)

// console.log(produtoNovo)
