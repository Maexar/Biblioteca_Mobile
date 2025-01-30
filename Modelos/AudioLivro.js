class AudioLivro extends TipoMidia {
<<<<<<< HEAD
    #minutosDuracao;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao);
        this.#minutosDuracao = minutosDuracao;
=======
    #id;
    #minutosDuracao;
    #tamanhoMegaBytes;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao, tamanhoMegaBytes);
        this.#minutosDuracao = minutosDuracao;
        this.#tamanhoMegaBytes = tamanhoMegaBytes;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
    }

    get getMinutosDuracao(){
        return this.#minutosDuracao;
    }
<<<<<<< HEAD
=======

    get getTamanhoMegaBytes(){
        return this.#tamanhoMegaBytes;
    }
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
}