class TipoMidia {
<<<<<<< HEAD
    #titulo;
    #dataPublicacao;
    #autores;
    #categoriaLivro;
=======
    #id;
    #titulo;
    #dataPublicacao;
    #autores;
    #categoriaMidia;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)

    constructor(titulo, dataPublicacao, categoriaLivro) {
        this.#titulo = titulo;
        this.#dataPublicacao = dataPublicacao;
        this.#autores = [];
<<<<<<< HEAD
        this.#categoriaLivro = categoriaLivro;
=======
        this.#categoriaMidia = categoriaLivro;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
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
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
    }
}