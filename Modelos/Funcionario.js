class Funcionario {
    #nome;
    #cargo;
    #dataNascimento;
    #cpf;
    constructor(nome, cargo, dataNascimento, cpf) {
        this.#nome = nome;
        this.#cargo = cargo;
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get geNnome() {
        return this.#nome;
    }

}