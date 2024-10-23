class Emprestimo {
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

    get getFuncionario() {
        return this.#funcionario;
    }

    get getMulta() {
        return this.#multa;
    }

    get getDataEmprestimo() {
        return this.#dataEmprestimo;
    }

}