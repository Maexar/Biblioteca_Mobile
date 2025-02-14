class LivroFisico extends TipoMidia {
    #idLivroFisico;
    #qtdPaginas;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, qtdPaginas, dataPublicacao, categoriaLivro);
        this.#qtdPaginas = qtdPaginas;
    }

    get getQtdPaginas() {
        return this.#qtdPaginas;
    }
}