class AudioLivro extends TipoMidia {
    #idAudioLivro;
    #minutosDuracao;
    #tamanhoMegaBytes;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao, tamanhoMegaBytes);
        this.#minutosDuracao = minutosDuracao;
        this.#tamanhoMegaBytes = tamanhoMegaBytes;
    }

    get getMinutosDuracao(){
        return this.#minutosDuracao;
    }

    get getTamanhoMegaBytes(){
        return this.#tamanhoMegaBytes;
    }
}