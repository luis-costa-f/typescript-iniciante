/**
 * Recebe string '1.200,50' retorna number: 1200.50
 */
export default function moedaParaNumero(moeda) {
    const number = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(number) ? null : number;
}
