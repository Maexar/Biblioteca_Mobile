class RelatorioMidia{
    #idRelatorioMida;
    #dataRelatorio;
    #totalMidias;
    #totalLivrosDigitais;
    #totalLivrosFisicos;
    #totalAudioBook;

    constructor(totalMidias, totalLivrosDigitais, totalLivrosFisicos, totalAudioBook){
        this.#dataRelatorio = now();
        this.#totalMidias = totalMidias;
        this.#totalLivrosDigitais = totalLivrosDigitais;
        this.#totalLivrosFisicos = totalLivrosFisicos;
        this.#totalAudioBook = totalAudioBook;
    }

}