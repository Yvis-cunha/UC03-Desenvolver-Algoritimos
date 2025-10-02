import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let horasextra
let extra = 0
export class Pessoa{
    #cpf
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
        `)
    }
}
export class Funcionario extends Pessoa{
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
    set matricula(matriculapessoa){
        this.#matricula = matriculapessoa
    }
    get matricula(){
        return this.#matricula
    }
    calculo_horaextra(){
        horasextra = Number (prompt("Digita a quantida de horas extrar: "))
        extra = (horasextra * 15)
        this.#salario = this.#salario + extra
        console.log(`A quantidade de horas extrar é: R$${extra} Somando ao Salario fica: R$${this.#salario}`)
    }
    calcularSalario(){
        let totalbruto = this.#salario + extra
        let inss = totalbruto * 0.09
        let liquido = totalbruto - inss
        console.log(liquido)
        
    }
}
export class Gerente extends Funcionario{
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, setor, quantidadeequipe){
        super (nome, cpf, data_nascimento, cargo, salario, matricula)
        this.setor = setor
        this.quantidadeequipe = quantidadeequipe

    }
    calculobonificacao(){// esse aqui
        if(this.quantidadeequipe >= 10){
            let bonus = (this.salario * 0.15)
            console.log(`Seu salario é: R$${this.salario} e sua bonificação é: R$${bonus}`)
        }else{
            let bonus = (this.salario * 0.07)
            console.log(`Seu salario é: R$${this.salario} e sua bonificação é: R$${bonus}`)
        }
    }
}
export class Diretor extends Funcionario{
    #participacaolucro
    constructor(nome, cpf, data_nascimento, cargo, salario, matricula, participacaolucro, departamento, tempodirecao){
        super (nome, cpf, data_nascimento, cargo, salario, matricula)
        this.cargo = cargo
        this.#participacaolucro = participacaolucro
        this.departamento = departamento
        this.tempodirecao = tempodirecao

    }
    set participacaolucro(participacaolucrodiretor){
        this.#participacaolucro = participacaolucrodiretor
    }
    get participacaolucro(){
        return this.#participacaolucro
    }
    calculogratificacao(){     
      if(this.#participacaolucro == 'sim'){
            if(this.tempodirecao > 5){
                let bonus = (this.salario * 0.30)
                console.log(`Seu salario é: R$${this.salario} e sua gratificaçao é: R$${bonus}`)
            }else if(this.tempodirecao > 2 && this.tempodirecao < 5){
                let bonus = (this.salario * 0.25)
                console.log(`Seu salario é: R$${this.salario} e sua gratificaçao é: R$${bonus}`)
            }else if(this.tempodirecao < 2){
                let bonus = (this.salario * 0.20)
                console.log(`Seu salario é: R$${this.salario} e sua gratificaçao é: R$${bonus}`)                
            }
      }else if(gratifica == 'não'){
            let bonus = (this.salario * 0.15)
            console.log(`Seu salario é: R$${this.salario} e sua gratificaçao é: R$${bonus}`)
      }
    }
}
export class Dono extends Pessoa{
    #patrimonio
    #participacaoAcionario
    constructor(nome, cpf, data_nascimento, patrimonio, participacaolucro){
        super(nome, cpf, data_nascimento)
        this.#patrimonio = patrimonio
        this.#participacaoAcionario = participacaolucro
    }
    set patrimonio(patrimoniodono){
        this.#patrimonio = patrimoniodono
    }
    get patrimonio(){
        return this.#patrimonio
    }
    set participacaolucro(participacaolucrodono){
        this.#participacaoAcionario = participacaolucrodono
    }
    get participacaolucro(){
        return this.#participacaoAcionario
    }
    investir(valor){
        valor = prompt("Digite o valor que deseja investir: ")
        if(valor > 0){
            console.log("Valor investido é de: ", valor)
        }else{
            console.log("O valor precisar ser maior que zero!")
        }
    }
    retirarlucros(valor){
        valor = prompt("Digite o valor que deseja remover: ")
        console.log("Valor retirardo:", valor)
    }
}