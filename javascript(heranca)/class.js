import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

export class Pessoa{
    nome
    #cpf
    data_nascimento
    constructor(nome, cpf, data_nascimento){
        this.nome = nome
        this.#cpf = cpf
        this.data_nascimento = data_nascimento
    }
    set cpf(cpfpessoa){
        this.#cpf = cpfpessoa
    }
    get cpf(){
        return this.#cpf
    }
    mostrar_informacoes(){
        console.log(`
        Nome: ${this.nome}
        Cpf: ${this.#cpf}
        Data de nascimento: ${this.data_nascimento}
        Cargo: ${this.cargo}    
        `)
    }
}
export class Funcionario extends Pessoa{
    cargo
    #salario
    #matricula
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula){
        super (nome, cpf, data_nascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
    }
    set salario(salariopessoa){
        this.#salario = salariopessoa
    }
    get salario(){
        return this.#salario
    }
    set matriculua(matriculapessoa){
        this.#matricula = matriculapessoa
    }
    get matricula(){
        return this.#matricula
    }
    calculo_horaextra(){
        let horasextra = prompt("Digita a quantida de horas extrar: ")
        this.#salario + (horasextra * 15)
    }
}
export class Gerente extends Funcionario{
    constructor(cargo, salario, matricula, setor, quantidadeequipe){
        super (cargo, salario, matricula)
        this.setor = setor
        this.quantidadeequipe = quantidadeequipe

    }
    calculobonificacao(){
        if(this.quantidadeequipe >= 10){
            let bonus = (this.salario * 0.15)
            console.log(`Seu salario é: ${this.salario} e sua bonificação é: ${bonus}`)
        }else{
            let bonus = (this.salario * 0.07)
            console.log(`Seu salario é: ${this.salario} e sua bonificação é: ${bonus}`)
        }
    }
}
export class Diretor extends Funcionario{
    #salario
    #matricula
    constructor(cargo, salario, matricula, participacaolucro, departamento, tempodirecao){
        super (cargo, salario, matricula)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula
        this.participacaolucro = participacaolucro
        this.departamento = departamento
        this.tempodirecao = tempodirecao

    }
    calculogratificacao(){
      let gratifica = prompt(`Tem direito a participação nos lucros? digite sim, ou não`)
      if(gratifica == 'sim'){
            if(this.tempodirecao > 5){
                let bonus = (this.salario * 0.30)
                console.log(`Seu salario é: ${this.salario} e sua gratificaçao é: ${bonus}`)
            }else if(this.tempodirecao < 2){
                let bonus = (this.salario * 0.20)
                console.log(`Seu salario é: ${this.salario} e sua gratificaçao é: ${bonus}`)
            }
      }else if(gratifica == 'não'){
            let bonus = (this.salario * 0.15)
            console.log(`Seu salario é: ${this.salario} e sua gratificaçao é: ${bonus}`)
      }
    }
}