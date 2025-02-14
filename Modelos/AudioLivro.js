class AudioLivro extends TipoMidia {
<<<<<<< HEAD
    #minutosDuracao;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao);
        this.#minutosDuracao = minutosDuracao;
=======
    #idAudioLivro;
    #minutosDuracao;
    #tamanhoMegaBytes;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao, tamanhoMegaBytes);
        this.#minutosDuracao = minutosDuracao;
        this.#tamanhoMegaBytes = tamanhoMegaBytes;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    }

    get getMinutosDuracao(){
        return this.#minutosDuracao;
    }
<<<<<<< HEAD
=======

    get getTamanhoMegaBytes(){
        return this.#tamanhoMegaBytes;
    }
>>>>>>> 8c0f1d0 (Classes atualizadas.)
}