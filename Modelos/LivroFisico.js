class LivroFisico extends TipoMidia {
<<<<<<< HEAD
=======
    #id;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
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
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
}