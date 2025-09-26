import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

export class Memoria{
    #tipo
    #frequencia
    #capacidade
    constructor(tipo, frequencia, capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    }

    // get set do tipo de memoria
    set tipo(tipomemoria){
        this.#tipo = tipomemoria
    }
    get tipo(){
        return this.#tipo
    }

    // get set da frenqeuncia
    set frequencia(frequenmemoria){
        this.#frequencia = frequenmemoria
    }
    get frequencia(){
        return this.#frequencia
    }

    // get set da capacidade
    set capacidade(capacimemoria){
        this.#capacidade = capacimemoria
    }
    get capacidade(){
        return this.#capacidade
    }
    usamemoria(){
        let qtd = prompt(`Digite a quantidade de uso de memoria: `)
        if(qtd > this.#capacidade){
            console.log(`É necesario liberar espaço`)
            this.liberarMemoria()
        }else{
            let resultqtd = this.#capacidade = (this.#capacidade - qtd)
            console.log(`A quantidade de uso em memoria é de: ${resultqtd}Mbps`)
        }
    }
    liberarMemoria(){
        let qtd = Number (prompt(`Digite quanto de memoria que liberar: `))
        this.#capacidade = (this.#capacidade - qtd)
    }
}

export class processador{
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor(marca, modelo, nucleo, velocidade){
        this.#marca = marca
        this.#modelo = modelo
        this.#nucleo = nucleo
        this.#velocidade = velocidade
    }
    executarprograma(){
        console.log(`O programa `)
    }
}