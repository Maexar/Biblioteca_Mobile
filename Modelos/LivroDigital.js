class LivroDigital extends TipoMidia {
<<<<<<< HEAD
    #qtdPaginas;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, qtdPaginas, dataPublicacao, categoriaLivro);
        this.#qtdPaginas = qtdPaginas;
=======
    #id;
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
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
    }
}