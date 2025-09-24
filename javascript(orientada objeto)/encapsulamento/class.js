import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

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
    #nomeTitular
    #saldo = 0
    constructor(nomeTitular,saldo,numeroConta, numeroAgencia, dataAbertura){
        this.#nomeTitular = nomeTitular
        this.#saldo = saldo
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.dataAbertura = dataAbertura
    }

    set NomeTitular(nometi){
        this.#nomeTitular = nometi
    }
    get NomeTitular(){
        return this.#nomeTitular
    }
    set saldo(sal){
        this.#saldo = sal
    }
    get saldo(){
        return this.#saldo
    }
    sacar(){
        let valosaque = Number(prompt(`Digite o valor que deseja sacar: `))
        if(valosaque > 0 && valosaque <= this.#saldo){           
            this.#saldo = (this.#saldo - valosaque)
        }else{
            console.log(`O valor precisar ser menor R$${this.#saldo}`)
        }
    }
    depositar(){
        let valodeposito = Number(prompt(`Digite o valor que deseja depositar: `))
        if(valodeposito > 0 ){
            this.#saldo = (this.#saldo + valodeposito)
        }else{
            console.log(`O valor inserido é inválido`)
        }
    }
    calcularrendimento(){
        this.#saldo = (this.#saldo * 0.10)
        console.log(`Rendimento da conta: ${this.#saldo}`)
    }
    versaldo(){
        console.log(`Seu saldo atual é: ${this.#saldo}`)
    }

  
}