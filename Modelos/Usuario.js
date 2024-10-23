class Usuario {
    #nome;
    #endereco;
    #listaEmprestimos;
    #cpf;
    #dataNascimento;

    constructor(nome, endereco, CPF, dataNascimento) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#listaEmprestimos = [];
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento;
    }

    get getNome() {
        return this.#nome;
    }

    get getEndereco() {
        return this.#endereco;
    }

    set setEndereco(endereco) {
        this.#endereco = endereco;
    }

    get getListaEmprestimos() {
        return this.#listaEmprestimos;
    }

    adicionarEmprestimo(emprestimo) {
        this.#listaEmprestimos.push(emprestimo);
    }
}