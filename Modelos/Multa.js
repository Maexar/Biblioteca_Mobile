class Multa {
<<<<<<< HEAD
=======
    #idMulta;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
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