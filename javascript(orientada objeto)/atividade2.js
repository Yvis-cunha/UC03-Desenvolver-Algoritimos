import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

class Data{
    dia
    mes
    ano
    escrevaData(){
        console.log(`${this.dia}/${this.mes}/${this.ano}`)
    }
    escrevaMes(){
        switch(this.mes){
            case '01':
                console.log(`Janeiro`)
            break
            case '02':
                console.log(`Fevereiro`)
            break
            case '03':
                console.log(`Março`)
            break
            case '04':
                console.log(`Abril`)
            break
            case '05':
                console.log(`Maio`)
            break
            case '06':
                console.log(`Junho`)
            break
            case '07':
                console.log(`Julho`)
            break
            case '08':
                console.log(`Agosto`)
            break
            case '09':
                console.log(`Setembro`)
            break
            case '10':
                console.log(`Outubro`)
            break
            case '11':
                console.log(`Novembro`)
            break
            case '12':
                console.log(`Dezembro`)
            break                               
        }
    }
    quantoFaltaFimAno(){
        this.dia = this.dia - 365 + 90
    }
}

let mostrar = new Data() //Variavel para guarda as informações do objeto

mostrar.dia = prompt("Digite o dia: ")
mostrar.mes = prompt("Digite o mês: ")
mostrar.ano = prompt("Digite o Ano: ")

mostrar.escrevaData()
mostrar.escrevaMes()
mostrar.quantoFaltaFimAno()