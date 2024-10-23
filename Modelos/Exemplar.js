class Exemplar {
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
    }

    get getDataExemplar() {
        return this.#dataExemplar;
    }
}