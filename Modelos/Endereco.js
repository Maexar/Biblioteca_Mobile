class Endereco {
<<<<<<< HEAD
=======
    #id;
>>>>>>> 39eb350 (Adicionando máscara aos inputs e validando entradas)
    #numero;
    #rua;
    #bairro;
    #cidade;

    constructor(numero, rua, bairro, cidade) {
        this.#numero = numero;
        this.#rua = rua;
        this.#bairro = bairro;
        this.#cidade = cidade;
    }

    get getNumero() {
        return this.#numero;
    }

    get getRua() {
        return this.#rua;
    }

    get getBairro() {
        return this.#bairro;
    }

    get getCidade() {
        return this.#cidade;
    }

}

export default Endereco;