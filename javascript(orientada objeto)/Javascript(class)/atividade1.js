import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


class Lampada{
    acesa
    potencia    
    acender(){
        this.acesa = true
    }
    apagar(){
        this.acesa = false       
    }
    informasituacao(){
        if(this.acesa == true){
            console.log('A luz está ligada!')
        }else{
            console.log('A luz está desligada!')
        }
    }    
    informapotencia(){
         console.log(`A potencia da lampada é: ${this.potencia = '96%'}`)
    }
}
let mostrar = new Lampada() // aqui adiciono as informações a variavel
//mostrar.acesa = false

mostrar.acender() // aqui chamo para ligar a luz, mudar o atributo
mostrar.informasituacao()
mostrar.apagar()
mostrar.informasituacao()
mostrar.informapotencia()

let opcao
do{
    opcao = prompt("Deseja liga a luz ? digite ligar, e apagar para desligar: ").toLocaleLowerCase()
    if(opcao == 'ligar'){
        mostrar.acender()
        mostrar.informasituacao()
    }else if(opcao == 'apagar'){
        mostrar.apagar()
        mostrar.informasituacao()
    }
    
}while(opcao != '0')
    