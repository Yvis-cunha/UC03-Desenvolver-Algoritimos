import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {Funcionario, Gerente, Diretor, Dono} from "./class.js"

let escolha

do{
     escolha = prompt(`
    ===Você deseja acessar informações===
    1- Funcionario
    2- Gerencia
    3- Diretoria
    4- Dono
    0- Sair
    `)
    switch(escolha){
        case '1':
            console.log("Digite os dados do funcionario")
            const funcionario1 = new Funcionario()
            funcionario1.cargo = prompt("Cargo: ")
            funcionario1.salario = Number (prompt("Salario: "))
            funcionario1.matricula = prompt("Matricula: ")
            funcionario1.extra = Number (prompt("Digita a quantida de horas extrar: "))
            let opcao
            do{
                opcao = prompt(`
            ===Operação===
            1- Calculo do salario
            2- Contra cheque
            3- Sair    
                `)
            switch(opcao){
                case '1':
                    console.log(`Seu salario é: R$${funcionario1.calcularSalario()}`)
                break
                case '2':
                    funcionario1.gerarContracheque()
                break        
            }
            }while(opcao != 0)
        break
        case '2':
            console.log("Digite os dados do gerencia")
            const gerente1 = new Gerente()
            gerente1.nome = prompt("Nome: ")
            gerente1.cpf = prompt("Cpf: ")
            gerente1.data_nascimento = prompt("Data Nascimento: ")
            gerente1.cargo = prompt("Cargo: ")
            gerente1.salario = Number (prompt("Salario: "))
            gerente1.matricula = prompt("Matricula: ")
            gerente1.setor = prompt("Setor: ")
            gerente1.quantidadeequipe = Number (prompt("Qtd Equipe: "))

            gerente1.calculobonificacao()
        break
        case '3':
            console.log("Digite os dados da diretoria")
            const diretor1 = new Diretor()
            diretor1.nome = prompt("Nome: ")
            diretor1.cpf = prompt("Cpf: ")
            diretor1.data_nascimento = prompt("Data nascimento: ")
            diretor1.cargo = prompt("Cargo: ")
            diretor1.salario = Number (prompt("Salario: "))
            diretor1.matricula = prompt("Matricula: ")
            diretor1.participacaolucro = prompt("Particição Lucros: ")
            diretor1.departamento = prompt("Departamento: ")
            diretor1.tempodirecao = Number (prompt("Tempo de direção: "))

            diretor1.calculogratificacao()
        break
        case '4':
            console.log("Digite os dados do Dono")
            const dono1 = new Dono()
            dono1.nome = prompt("Nome: ")
            dono1.cpf = prompt("CPF: ")
            dono1.data_nascimento = prompt("Data de nasciemnto: ")
            dono1.patrimonio = Number (prompt("Patrimonio: "))
            dono1.participacaolucro = prompt("Participação lucro: ")

            let inves = prompt("Digite 1 para investir e 2 para retirar o lucro\n")
            if(inves == '1'){
                dono1.investir()
            }else if(inves == '2'){
                dono1.retirarlucros()    
            }
        break    
    }
}while(escolha != 0)

