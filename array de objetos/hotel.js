import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {Hotel, Cliente, Quarto, Reserva, ErroHotel, criarRelatorio} from "./class.js"

const hotel1 = new Hotel()

let opcao
do{
opcao = prompt(`
    ==⭐⭐⭐ HOTEL JS 6 ESTRELAS ⭐⭐⭐==
    1- Atendete
    2- Cliente
    3- Sair!    
    `)
    switch(opcao){
               
        case '1':
            let opcao2
            do{
            opcao2 = prompt(`
            ==SISTEMA DE GERENCIAMENTO==
            1- Adicionar Quartos
            2- Relatorio//Cancelar Reservas
            3- Lista Quartos disponivel
            4- Reserva Quarto
            5- Lista reservas
            6- Volta a tela inicial
            `)
            switch(opcao2){
                case '1':
                    const numequarto = Number (prompt("Digite o numero do quarto: "))
                    const tipoquarto = prompt("Digite o tipo do quarto: ")
                    hotel1.adicionarquarto(numequarto, tipoquarto)
                break
                case '2':
                    criarRelatorio(hotel1.quartos)
                break
                case '3':
                    hotel1.listaQuartosDisponiveis()
                break
                case '4':
                    try{
                    hotel1.reservarQuarto()
                    }catch(error){
                        console.error(error.message)
                    }    
                    break
                case '5':
                    hotel1.listarReservas()        
                }            
            }while(opcao2 != '6')
                 break

        case '2':
            let opcao3
            do{
            opcao3 = prompt(`
            ==🏠 RESERVA DE QUARTOS 🏠==    
            1- Cancelar Reservas
            2- Listar Quartos disponiveis
            4- Voltar a tela inicial        
            `)
            switch(opcao3){
                case '1':
                    hotel1.reservarQuarto()
                break
                case '2':
                    hotel1.listaQuartosDisponiveis()  
                break
                case '3':
                   //reservar quarto
                break          
                }
            }while(opcao3 != '4')
                 break
}   
}while(opcao !=3)