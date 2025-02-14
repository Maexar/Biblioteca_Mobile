class RelatorioEmprestimo{
<<<<<<< HEAD
    #id;
=======
    #idRelatorioEmprestimo;
>>>>>>> 8c0f1d0 (Classes atualizadas.)
    #dataRelatorio;
    #qntEmprestimosAtivos;
    #qntEmprestimosTotais;

    constructor(qntEmprestimosAtivos, qntEmprestimosTotais){
        this.#dataRelatorio = now();
        this.#qntEmprestimosAtivos = qntEmprestimosAtivos;
        this.#qntEmprestimosTotais = qntEmprestimosTotais;
    }

}