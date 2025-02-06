class RelatorioEmprestimo{
    #id;
    #dataRelatorio;
    #qntEmprestimosAtivos;
    #qntEmprestimosTotais;

    constructor(qntEmprestimosAtivos, qntEmprestimosTotais){
        this.#dataRelatorio = now();
        this.#qntEmprestimosAtivos = qntEmprestimosAtivos;
        this.#qntEmprestimosTotais = qntEmprestimosTotais;
    }

}