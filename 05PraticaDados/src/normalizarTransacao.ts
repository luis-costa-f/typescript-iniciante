import moedaParaNumero from './moedaParaNumero.js';
import stringToDate from './stringToDate.js';

declare global {
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
        Email: string;
        ['Valor (R$)']: string;
        ['Cliente Novo']: number;
        ['Forma de Pagamento']: TransacaoPagamento;
    }

    interface Transacao {
        nome: string;
        id: number;
        data: Date;
        status: TransacaoStatus;
        email: string;
        moeda: string;
        valor: number | null;
        pagamento: TransacaoPagamento;
        novo: boolean;
    }
}

export default function normalizarTransacao(
    transacao: TransacaoAPI,
): Transacao {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao['Valor (R$)'],
        valor: moedaParaNumero(transacao['Valor (R$)']),
        pagamento: transacao['Forma de Pagamento'],
        novo: Boolean(transacao['Cliente Novo']),
    };
}
