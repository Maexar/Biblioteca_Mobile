class AudioLivro extends TipoMidia {
    #minutosDuracao;
    constructor(titulo, dataPublicacao, categoriaLivro) {
        super(titulo, dataPublicacao, categoriaLivro, minutosDuracao);
        this.#minutosDuracao = minutosDuracao;
    }

    get getMinutosDuracao(){
        return this.#minutosDuracao;
    }
}