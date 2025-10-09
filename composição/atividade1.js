import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import { Armazenamento, Computador, Memoria, Processador, Tela} from "./class.js"
//computador 1
console.log("===Montando o primeiro computador===")
const memoria1 = new Memoria(prompt("Tipo da memoria: "),prompt("Frequencia da memoria: "),prompt("Tamanho da memoria em Gb: "))// aqui estou adicionando as informações direto mais tbn posso pedir
const processador1 = new Processador(prompt("Marca do processador: "), prompt("Modelo do processador: "), prompt("Quantos nucleo: "), prompt("Velocidade do clock: ")) // aqui estou adicionando as informações direto mais tbn posso pedir
const Computador1 = new Computador()// aqui estou estanciando a class computador
const armazenamento1 = new Armazenamento(prompt("Tipo do armazenamento: "), prompt("Capacidade: "),(0))
const tela1 = new Tela(prompt("Quantas polegdas: "), prompt("Resolução: "))

Computador1.memoria = memoria1 //aqui estou dizendo que computador1, memoria receber memoria1
Computador1.processador = processador1 //aqui estou dizendo que computador1, processasor receber processador1
Computador1.armazenamento = armazenamento1//aqui estou dizendo que computador1, armazenamento receber armazenamento1
Computador1.tela = tela1

//computador 2
console.log("===Montando o segundo computador===")
const memoria2 = new Memoria(prompt("Tipo da memoria: "), prompt("Frequencia da memoria: "),prompt("Tamanho da memoria em Gb: "))// aqui estou adicionando as informações direto mais tbn posso pedir
const processador2 = new Processador(prompt("Marca do processador: "), prompt("Modelo do processador: "), prompt("Quantos nucleo: "), prompt("Velocidade do clock: ")) // aqui estou adicionando as informações direto mais tbn posso pedir
const Computador2 = new Computador()// aqui estou estanciando a class computador
const armazenamento2 = new Armazenamento(prompt("Tipo do armazenamento: "), prompt("Capacidade: "), prompt("Espaço usado em Gb: "))
const tela2 = new Tela(prompt("Quantas polegdas: "), prompt("Resolução: "))

Computador2.memoria = memoria2 //aqui estou dizendo que computador1, memoria receber memoria1
Computador2.processador = processador2 //aqui estou dizendo que computador1, processasor receber processador1
Computador2.armazenamento = armazenamento2//aqui estou dizendo que computador1, armazenamento receber armazenamento1
Computador2.tela = tela2


Computador1.imprimirfichatenica()
Computador2.imprimirfichatenica()

let opcao
do{
    opcao = prompt(`
       
    1- Para instalar um programa.
    2- Para desistalar um programa.
    3- Para ver programas instalados.
    4- Ficha técnica.
    5- Ligar Tela.
    6- Desligar Tela.
    7- Espaço livre em armazenamento.
    8- Executar um programa.
    `)
    switch(opcao){
        case '1':
            Computador1.instalarsoftware()
        break
        case '2':
            Computador1.removersoftware()
        break
        case '3':
            Computador1.listasoftare()
        break
        case '4':
            Computador1.imprimirfichatenica()
        break
        case '5':
            tela1.ligar()
        break
        case '6':
            tela1.desligar()
        break
        case '7':
            armazenamento1.espacoLivre()
        break
        case '8':
            processador1.executarprograma()
        break                           
        
    }       
}while(opcao != 0)






// Computador1.instalarsoftware()
// Computador1.removersoftware()





