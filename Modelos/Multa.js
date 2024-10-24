class Multa {
    #valorMulta;
    #dataPagamento;

    constructor(valorMulta, dataPagamento) {
        this.#valorMulta = valorMulta;
        this.#dataPagamento = dataPagamento;
    }

    get getValorMulta() {
        return this.#valorMulta;
    }

    get getDataPagamento() {
        return this.#dataPagamento;
    }
}