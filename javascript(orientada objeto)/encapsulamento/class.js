// class da atividae 1
export class cliente{
    #nome
    #endereco
    #renda
    constructor(nome, endereco, renda){
        this.#nome = nome
        this.#endereco = endereco
        this.#renda = renda
        
    }
    set nome(nomecliente){
        this.#nome = nomecliente
    }
    get nome(){
        return this.#nome
    }
    set endereco(enderecocliente){
        this.#endereco = enderecocliente
    }
    get endereco(){
        return this.#endereco
    }
    set renda(rendacliente){
        this.#renda = rendacliente
    }
    get renda(){
        return this.#renda
    }
    imprimir(){
        console.log(`nome: ${this.#nome}\nEndereço:${this.#endereco}\nRenda: ${this.#renda}`)
    }
}
//class da atividade 2
export class contaBacaria{

}