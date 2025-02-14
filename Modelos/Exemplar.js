class Exemplar {
<<<<<<< HEAD
    #codigo;
    #livro;
    #dataExemplar;

    constructor(codigo, livro, dataExemplar) {
        this.#codigo = codigo;
        this.#livro = livro;
        this.#dataExemplar = dataExemplar;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getLivro() {
        return this.#livro;
=======
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
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    }

    get getDataExemplar() {
        return this.#dataExemplar;
    }
<<<<<<< HEAD
=======

    removerExemplar(dataRemocao){
        this.#dataRemocao = dataRemocao;
    }
>>>>>>> 8c0f1d0 (Classes atualizadas.)
}