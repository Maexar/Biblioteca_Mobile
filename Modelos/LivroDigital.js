class LivroDigital extends TipoMidia {
    #idLivroDigital;
    #qtdPaginas;
    #tamanhoMegaBytes
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, qtdPaginas, dataPublicacao, categoriaLivro, tamanhoMegaBytes);
        this.#qtdPaginas = qtdPaginas;
        this.#tamanhoMegaBytes = tamanhoMegaBytes
    }

    get getQtdPaginas() {
        return this.#qtdPaginas;
    }

    get getTamanhoMegaBytes() {
        return this.#tamanhoMegaBytes;
    }
}