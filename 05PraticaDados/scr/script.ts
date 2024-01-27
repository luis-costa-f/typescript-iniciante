import fetchData from './fetchData.js';

type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
type TransacaoStatus =
    | 'Paga'
    | 'Aguardando pagamento'
    | 'ecusada pela operadora de cartão'
    | 'Estornada';

interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
    ['Forma de Pagamento']: TransacaoPagamento;
}

async function handleData() {
    const data = await fetchData<TransacaoAPI[]>(
        'https://api.origamid.dev/json/transacoes.json',
    );

    if (data) {
        data.forEach((item) => {
            console.log(item);
        });
    }

    console.log('codigo continuou');
}

handleData();
