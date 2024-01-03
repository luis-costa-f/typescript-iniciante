'use strict';

console.log('----------- Begin Desafio 1 -------------');

async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();

interface ICurso {
    aulas: number;
    gratuito: boolean;
    horas: number;
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
    tags: string[];
}

function isCurso(value: unknown): value is ICurso {
    if (
        value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'tags' in value
    )
        return true;
    else return false;
}

function handleCursos(data: unknown) {
    if (Array.isArray(data)) {
        data.filter((item) => {
            isCurso(item);
        }).forEach((item) => {
            console.log(item);
        });
    }
}

setTimeout(() => console.log('----------- End Desafio 1 -------------'), 2000);
