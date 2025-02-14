class CategoriaLivro {
    #idCategoria;
    #categoria;
    constructor(categoria){
        this.#categoria = categoria;
    }

    get getCategoria(){
        return this.#categoria;
    }
}