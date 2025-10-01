import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {Pessoa, Funcionario, Gerente, Diretor, Dono} from "./class.js"

console.log("Digite os dados do funcionario")
const funcionario1 = new Funcionario(prompt("Cargo: "), prompt("Salario: "),prompt("Matricula: "))
console.log("Digite os dados do gerente")
const gerente1 = new Gerente(prompt("Nome: "), prompt("Cpf: "), prompt("Data nascimento: "), prompt("Cargo: "), prompt("Salario: "),prompt("matricula: "), prompt("Setor: "), prompt("Qtd equipe: "))
console.log("Digite os dados do Diretor")
const diretor1 = new Diretor(prompt("Nome: "), prompt("Cpf: "), prompt("Data nascimento: "), prompt("Cargo: "), prompt("Salario: "), prompt("Matricula: "), prompt("participações lucro: "), prompt("Departamento: "), prompt("Tempo de direção: "))
console.log("Digite os dados do Dono")
const dono1 = new Dono(prompt("Nome: "), prompt("Cpf: "), prompt("Data nascimento: "), prompt("Patrimonio: "), prompt("Participação lucro: "))


// pessoa1.funcionario1 = Pessoa 
// pessoa1.mostrar_informacoes()
