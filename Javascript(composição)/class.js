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

export class Processador{
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
    set marca(marcaprocessador){
        this.#marca = marcaprocessador
    }
    get marca(){
        return this.#marca
    }
    set modelo(modeloprocessador){
        this.#modelo = modeloprocessador
    }
    get modelo(){
        return this.#modelo
    }
    set nucleo(nucleoprocessador){
        this.#nucleo = nucleoprocessador
    }
    get nucleo(){
        return this.#nucleo
    }
    set velocidade(vecolidadeprocessador){
        this.#velocidade = vecolidadeprocessador
    }
    get velocidade(){
        return this.#velocidade
    }
    executarprograma(){
        console.log(`O programa Audacity está em execução:`)
    }
}//classe armazenamento
export class Armazenamento{
    #tipo
    #capacidade
    #espacoultilizado
    constructor(tipo, capacidade, espacoultilizado){
        this.#tipo = tipo
        this.#capacidade = capacidade
        this.#espacoultilizado = espacoultilizado

    }
    set tipo(tipoarmazenamento){
        this.#tipo = tipoarmazenamento
    }
    get tipo(){
        return this.#tipo
    }
    set capacidade(capacidadearmazenamento){
        this.#capacidade = capacidadearmazenamento
    }
    get capacidade(){
        return this.#capacidade
    }
    set espacoultilizado(espacoultilizadoarmaze){
        this.#espacoultilizado = espacoultilizadoarmaze
    }
    get espacoultilizado(){
        return this.#espacoultilizado
    }
    espacoLivre(){

    }
}// casse tela
export class Tela{
    #tamanho
    #resolucao
    constructor(tamanho, resolucao){
        this.#tamanho = tamanho
        this.#resolucao = resolucao
    }
    set tamanho(tamanhotela){
        this.#tamanho = tamanhotela
    }
    get tamanho(){
        return this.#tamanho
    }
    set resolucao(resolucaotela){
        this.#resolucao = resolucaotela
    }
    get resolucao(){
        return this.#resolucao
    }
    ligar(){
        console.log(`A tela está ligada!`)
    }
    desligar(){
        console.log(`A tela está desligada!`)
    }
}

export class Computador{
    #marca
    #modelo
    #memoria 
    #processador
    #armazenamento
    #tela
    constructor(marca, modelo, memoria, processador, armazenamento, tela){
        this.#marca = marca
        this.#modelo = modelo
        this.#memoria = memoria
        this.#processador = processador
        this.#armazenamento = armazenamento
        this.#tela = tela
    }
    set marca(marcaomputador){
        this.#marca = marcaomputador
    }
    get marca(){
        return this.#marca
    }
    set modelo(modelocomputador){
        this.#modelo = modelocomputador
    }
    get modelo(){
        return this.#modelo
    }
    set memoria(memoriacomputador){
        this.#memoria = memoriacomputador
    }
    get memoria(){
        return this.#memoria
    }
    set processador(processadorcomputador){
        this.#processador = processadorcomputador
    }
    get processador(){
        return this.#processador
    }
    set armazenamento(armazenamentocomputador){
        this.#armazenamento = armazenamentocomputador
    }
    get armazenamento(){
        return this.#armazenamento
    }
    set tela(telacomputador){
        this.#tela = telacomputador
    }
    get tela(){
        return this.#tela
    }
    imprimirfichatenica(){
        console.log(`
         ====ficha técnica====
        Memoria Ram, tipo: ${this.#memoria.tipo} frequencia: ${this.#memoria.frequencia} Capacidade: ${this.#memoria.capacidade}

            `)
    }
}