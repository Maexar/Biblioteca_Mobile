class Autor {
<<<<<<< HEAD
=======
    #idAutor;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    #nome;
    #nacionalidade;
    #dataNascimento;
    constructor(nome, nacionalidade, dataNascimento) {
        this.#nome = nome;
        this.#nacionalidade = nacionalidade;
        this.#dataNascimento = dataNascimento;
    }
    get getNome() {
        return this.#nome;
    }
    get getNacionalidade() {
        return this.#nacionalidade;
    }
    get getDataNascimento() {
        return this.#dataNascimento;
    }

}