import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


class contafacil extends Error{
    constructor(message){
        super(message)
    }
}
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
            throw new contafacil('Error! O valor precisar ser menor!')
            //onsole.log(`O valor precisar ser menor R$${this.#saldo}`)
        }
    }
    depositar(){
        let valodeposito = Number(prompt(`Digite o valor que deseja depositar: `))
        if(valodeposito > 0 ){
            this.#saldo = (this.#saldo + valodeposito)
        }else{
            throw new contafacil('Error! O valor inserido é invalido!')
            //console.log(`O valor inserido é inválido`)
        }
    }
    calcularrendimento(){
        if(this.saldo > 0){
            let rendimento = (this.#saldo * 0.10).toFixed(2)
            console.log(`Rendimento da conta: R$${rendimento}`)
        }else{
            throw new contafacil('Error! Para que sua conta tenha redimento, precisar ter valor em conta!')
        }

    }
    versaldo(){
        console.log(`Seu saldo atual é: ${this.#saldo}`)
    }
  
}