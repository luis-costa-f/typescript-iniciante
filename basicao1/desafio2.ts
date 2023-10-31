interface curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: false;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

async function fetchCurso() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data: curso[] = await response.json();
  console.table(data);
  mostrarCursos(data);
}

fetchCurso();

function mostrarCursos(cursos: curso[]) {
  const body = document.body;
  cursos.forEach((curso) => {
    const color = curso.nivel === 'iniciante' ? 'blue' : 'red';
    body.innerHTML += `        
        <h2>${curso.nome}</h2>
        <p>${curso.aulas} aulas: ${curso.horas} horas</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <h4 style="color: ${color}">${curso.nivel}</h4>
        <h4">tags: ${curso.tags.join(', ')}</h4>`;
  });
}
