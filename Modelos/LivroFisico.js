class LivroFisico extends TipoMidia {
<<<<<<< HEAD
=======
    #idLivroFisico;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    #qtdPaginas;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, qtdPaginas, dataPublicacao, categoriaLivro);
        this.#qtdPaginas = qtdPaginas;
    }
<<<<<<< HEAD
=======

    get getQtdPaginas() {
        return this.#qtdPaginas;
    }
>>>>>>> 8c0f1d0 (Classes atualizadas.)
}