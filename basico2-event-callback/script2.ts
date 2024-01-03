async function getData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

interface INotebook {
    nome: string;
    preco: number;
}

async function handleData1() {
    const notebook = await getData<INotebook>(
        'https://api.origamid.dev/json/notebook.json',
    );
    console.log(notebook);
}

handleData1();
