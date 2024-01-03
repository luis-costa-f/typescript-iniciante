"use strict";
async function fetchCursos1() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    console.log(json);
}
fetchCursos1();
function handleCursos1(data) {
    if (data instanceof Array) {
        console.log('é um instancia de array');
    }
    if (Array.isArray(data)) {
        console.log('é um array');
    }
}
function isString(value) {
    return typeof value === 'string';
}
function handleData(data) {
    if (isString(data)) {
        //data.toLowerCase();
    }
}
