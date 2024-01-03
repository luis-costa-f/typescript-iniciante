'use strict';
console.log('----------- Begin Desafio 1 -------------');
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'tags' in value)
        return true;
    else
        return false;
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter((item) => {
            isCurso(item);
        }).forEach((item) => {
            console.log(item);
        });
    }
}
setTimeout(() => console.log('----------- End Desafio 1 -------------'), 2000);
