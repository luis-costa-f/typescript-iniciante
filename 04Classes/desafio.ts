// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchApi1() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');

    const data = await response.json();
    somarVendas(data);
}

fetchApi1();

interface IProdutoDetalhes {
    marca: string;
    cor: string;
}
type Venda = [string, number, string, IProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
    let total2 = 0;
    // for (let i = 0; i < vendas.length; i++) {
    //     total += vendas[i][1];
    // }

    total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);

    document.body.innerHTML += `<p>${total2}</p>`;
}

// const arr = [3, 5, 10, 20, 30];
// const somar = arr.reduce((anterior, atual) => {
//     console.log(anterior);
//     return anterior + atual;
// }, 0);

// console.log(somar);
