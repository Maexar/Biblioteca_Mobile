class Emprestimo {
<<<<<<< HEAD
    #codigo;
    #exemplar;
    #usuario;
    #funcionario;
    #multa;
    #dataEmprestimo;

    constructor(codigo, exemplar, usuario, funcionario, multa, dataEmprestimo) {
        this.#codigo = codigo;
        this.#exemplar = exemplar;
        this.#usuario = usuario;
        this.#funcionario = funcionario;
        this.#multa = multa;
        this.#dataEmprestimo = dataEmprestimo;
=======
    #idEmprestimo;
    #codigo;
    #exemplar;
    #usuario;
    #multa;
    #dataEmprestimo;
    #dataDevolucao;
    #status;

    constructor(codigo, exemplar, usuario, multa, dataEmprestimo) {
        this.#codigo = codigo;
        this.#exemplar = exemplar;
        this.#usuario = usuario;
        this.#multa = multa;
        this.#dataEmprestimo = dataEmprestimo;
        this.#status = 0;
    }

    devolucao(){
        this.#status = 1;
        this.#dataDevolucao = now();
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getExemplar() {
        return this.#exemplar;
    }

    get getUsuario() {
        return this.#usuario;
    }

<<<<<<< HEAD
    get getFuncionario() {
        return this.#funcionario;
    }

=======
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    get getMulta() {
        return this.#multa;
    }

    get getDataEmprestimo() {
        return this.#dataEmprestimo;
    }

<<<<<<< HEAD
=======
    get getDataDevolucao() {
        return this.#dataDevolucao;
    }

    get getStatus() {
        return this.#status;
    }
>>>>>>> 8c0f1d0 (Classes atualizadas.)
}