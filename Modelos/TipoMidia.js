class TipoMidia {
    #idTipoMidia;
    #titulo;
    #dataPublicacao;
    #autores;
    #categoriaMidia;

    constructor(titulo, dataPublicacao, categoriaLivro) {
        this.#titulo = titulo;
        this.#dataPublicacao = dataPublicacao;
        this.#autores = [];
        this.#categoriaMidia = categoriaLivro;
    }

    get getTitulo() {
        return this.#titulo;
    }

    set setTitulo(titulo) {
        this.#titulo = titulo;
    }

    get getDataPublicacao() {
        return this.#dataPublicacao;
    }

    set setDataPublicacao(dataPublicacao) {
        this.#dataPublicacao = dataPublicacao;
    }

    get getAutores() {
        return this.#autores;
    }

    adicionarAutor(autor) {
        this.#autores.push(autor);
    }

    get getCategoriaLivro() {
        return this.#categoriaMidia;
    }

    set setCategoriaLivro(categoriaLivro) {
        this.#categoriaMidia = categoriaLivro;
    }
}