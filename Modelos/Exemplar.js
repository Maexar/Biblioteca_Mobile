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
    #id;
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
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
    }

    get getDataExemplar() {
        return this.#dataExemplar;
    }
<<<<<<< HEAD
=======

    removerExemplar(dataRemocao){
        this.#dataRemocao = dataRemocao;
    }
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
}