class Usuario {
    #nome;
    #endereco;
    #listaEmprestimos;
    #cpf;
    #dataNascimento;
    #email;
    #senha;
    //nivel de acesso?

    constructor(nome, endereco, cpf, dataNascimento, email, senha) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#listaEmprestimos = [];
        this.#cpf = cpf; 
        this.#dataNascimento = dataNascimento;
        this.#email = email;
        this.#senha = senha;
    }


    get getNome() {
        return this.#nome;
    }
    get getEmail() {
        return this.#email;
    }

    get getSenha() {
        return this.#senha;
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

export default Usuario;