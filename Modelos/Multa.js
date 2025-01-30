class Multa {
<<<<<<< HEAD
=======
    #id;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
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