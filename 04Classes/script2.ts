async function fetchData<T>(url: string): Promise<T> {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}

interface Jogo {
    nome: string;
    ano: number;
    desenvolvedora: string;
    plataforma: string[];
}

interface Livro {
    nome: string;
    ano: number;
    autor: string;
    paginas: number;
}

function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    } else {
        return false;
    }
}

async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
        console.log(jogo);
    }

    const livro = await fetchData<Livro>('/livro.json');
    if (checkInterface<Livro>(livro, 'autor')) {
        console.log(livro);
    }
}

handleData();
