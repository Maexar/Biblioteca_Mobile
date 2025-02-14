class Emprestimo {
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

    get getMulta() {
        return this.#multa;
    }

    get getDataEmprestimo() {
        return this.#dataEmprestimo;
    }

    get getDataDevolucao() {
        return this.#dataDevolucao;
    }

    get getStatus() {
        return this.#status;
    }
}