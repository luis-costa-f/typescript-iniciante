import CountBy from './countBy.js';
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        const calc = this.transacoes
            .filter(filtrarValor)
            .reduce((acc, item) => {
            return (acc += item.valor);
        }, 0);
        return calc;
    }
    setPagamento() {
        const pagamentos = this.transacoes.map(({ pagamento }) => pagamento);
        return CountBy(pagamentos);
    }
    setStatus() {
        const status = this.transacoes.map(({ status }) => status);
        return CountBy(status);
    }
    setSemana() {
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
            if (this.transacoes[i].data.getDay() === 0)
                semana['Domingo'] += 1;
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
            if (this.transacoes[i].data.getDay() === 6)
                semana['Sábado'] += 1;
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
