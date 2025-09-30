import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {Pessoa, Funcionario} from "./class.js"


//const pessoa1 = new Pessoa (prompt("Digite seu nome: "), prompt("Digite seu Cpf: "), prompt("Digite sua data de nascimento: "))
const funcionario1 = new Funcionario(prompt("Digite seu cargo: "), prompt("Digite seu salario: "),prompt("Digite sua matricula: "))




// pessoa1.funcionario1 = Pessoa 
// pessoa1.mostrar_informacoes()
