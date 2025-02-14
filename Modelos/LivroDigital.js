class LivroDigital extends TipoMidia {
<<<<<<< HEAD
    #qtdPaginas;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, qtdPaginas, dataPublicacao, categoriaLivro);
        this.#qtdPaginas = qtdPaginas;
=======
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
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    }
}