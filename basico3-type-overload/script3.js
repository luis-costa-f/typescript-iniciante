"use strict";
async function fetchProduto1() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    console.log(json);
    handleProduto1(json);
}
fetchProduto1();
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value)
        return true;
    else
        return false;
}
function handleProduto1(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
