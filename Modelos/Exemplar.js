class Exemplar {
    #idExemplar;
    #tipoMidia;
    #dataExemplar;
    #dataRemocao;

    constructor(tipoMidia, dataExemplar) {
        this.#tipoMidia = tipoMidia;
        this.#dataExemplar = dataExemplar;
    }

    get getTipoMidia() {
        return this.#tipoMidia;
    }

    get getDataRemocao() {
        return this.#dataRemocao;
    }

    get getDataExemplar() {
        return this.#dataExemplar;
    }

    removerExemplar(dataRemocao){
        this.#dataRemocao = dataRemocao;
    }
}