import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import fs from 'fs'

export class Cliente{
    #cpf
    #contato
    constructor(cpf, nome, contato){
        this.#cpf = cpf
        this.nome = nome
        this.#contato = contato
    }
    set cpf(cpfcliente){
        this.#cpf = cpfcliente
    }
    get cpf(){
        return this.#cpf
    }
    set contato(contatocliente){
        this.#contato = contatocliente
    }
    get contato(){
        return this.#contato
    }
}
export class Quarto{
    constructor(numero, tipo){
        this.numero = numero
        this.tipo = tipo
    }
}
export class Reserva{
    constructor(quarto, datareserva, cliente){
        this.quarto = quarto
        this.datareserva = datareserva 
        this.cliente = cliente
    }
}
export class Hotel{
    constructor(nome, quartos = [], reservas = []){
        this.nome = nome
        this.quartos = quartos
        this.reservas = reservas
    }
    adicionarquarto(numero, tipo){
        const novoquarto = new Quarto(numero, tipo)       
        this.quartos.push(novoquarto)
        console.log(`Quarto numero: ${numero} Tipo: ${tipo} adicionado!`)
    }
    reservarQuarto(quarto, data, cliente){
        const quartodesejado = Number (prompt("Digite o número do quarto que deseja: "))
        const indicequarto = this.quartos.findIndex(q => q.numero === quartodesejado)
        //console.log(indicequarto)
        if(indicequarto !== -1){ //aqui se o indice for diferente de -1 ele encontrou por tanto posso comparar
            const quartomovido = this.quartos.splice(indicequarto, 1) //aqui o splice verifica dentro do array quartos, o indice e remove uma vez
            this.reservas.push(quartomovido[0])

            
            console.log(`Quarto numero: ${quartodesejado}, Reservado com sucesso!`)
        }else{
            throw new ErroHotel("Error! O Quarto que deseja reserva, não está disponivel!")
            // console.log("Não disponivel")
        }
    }
    cancelarReserva(quarto, data, cliente){

    }
    listaQuartosDisponiveis(){
        console.log(this.quartos)
    }
    listarReservas(){
        console.log(this.reservas)
    }
    informacoesReserva(){

    }
}
export class ErroHotel extends Error{
    constructor(message){
        super(message)
    }

}

export function criarRelatorio(quartos){
let dadosrelatiorio = ''   
quartos.forEach(quarto => {
    dadosrelatiorio = dadosrelatiorio + `Quarto nº ${quarto.numero} Tipo: ${quarto.tipo}
    `})
    fs.appendFileSync('relatório.txt', dadosrelatiorio, "utf-8")
}
export function lerArquivo(){
    try{
        let dados = fs.readFileSync('relatório.txt', 'utf-8')
        console.log('Conteudo: ', dados)
    }catch(error){
        console.log(error.message)
    }
}
