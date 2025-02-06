class Autor {
<<<<<<< HEAD
=======
    #id;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
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