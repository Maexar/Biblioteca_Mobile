class TipoMidia {
<<<<<<< HEAD
    #titulo;
    #dataPublicacao;
    #autores;
    #categoriaLivro;
    //quantidade em estoque?
=======
    #idTipoMidia;
    #titulo;
    #dataPublicacao;
    #autores;
    #categoriaMidia;
>>>>>>> 8c0f1d0 (Classes atualizadas.)

    constructor(titulo, dataPublicacao, categoriaLivro) {
        this.#titulo = titulo;
        this.#dataPublicacao = dataPublicacao;
        this.#autores = [];
<<<<<<< HEAD
        this.#categoriaLivro = categoriaLivro;
=======
        this.#categoriaMidia = categoriaLivro;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
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
<<<<<<< HEAD
        return this.#categoriaLivro;
    }

    set setCategoriaLivro(categoriaLivro) {
        this.#categoriaLivro = categoriaLivro;
=======
        return this.#categoriaMidia;
    }

    set setCategoriaLivro(categoriaLivro) {
        this.#categoriaMidia = categoriaLivro;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    }
}