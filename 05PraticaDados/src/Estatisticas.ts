import CountBy from './countBy.js';

type TransacaoValor = Transacao & { valor: number };

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
    return transacao.valor !== null;
}

export default class Estatisticas {
    private transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes: Transacao[]) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }

    private setTotal(): number {
        const calc = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, item) => {
                return (acc += item.valor);
            }, 0);
        return calc;
    }

    private setPagamento() {
        const pagamentos = this.transacoes.map(({ pagamento }) => pagamento);
        return CountBy(pagamentos);
    }

    private setStatus() {
        const status = this.transacoes.map(({ status }) => status);
        return CountBy(status);
    }

    private setSemana() {
        const semana = {
            ['Domingo']: 0,
            ['Segunda-Feira']: 0,
            ['Terça-Feira']: 0,
            ['Quarta-Feira']: 0,
            ['Quinta-Feira']: 0,
            ['Sexta-Feira']: 0,
            ['Sábado']: 0,
        };

        for (let i = 0; i < this.transacoes.length; i++) {
            if (this.transacoes[i].data.getDay() === 0) semana['Domingo'] += 1;
            if (this.transacoes[i].data.getDay() === 1)
                semana['Segunda-Feira'] += 1;
            if (this.transacoes[i].data.getDay() === 2)
                semana['Terça-Feira'] += 1;
            if (this.transacoes[i].data.getDay() === 3)
                semana['Quarta-Feira'] += 1;
            if (this.transacoes[i].data.getDay() === 4)
                semana['Quinta-Feira'] += 1;
            if (this.transacoes[i].data.getDay() === 5)
                semana['Sexta-Feira'] += 1;
            if (this.transacoes[i].data.getDay() === 6) semana['Sábado'] += 1;
        }

        return semana;
    }

    private setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
