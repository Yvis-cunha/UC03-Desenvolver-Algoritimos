import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import {Hotel, Cliente, Quarto, Reserva, ErroHotel} from "./class.js"

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
            2- Cancelar Reservas
            3- Lista Quartos disponivel
            4- Reserva Quarto
            5- Volta a tela inicial
            `)
            switch(opcao2){
                case '1':
                    hotel1.adicionarquarto()
                break
                case '2':
                    // hotel1.cancelar reserva
                break
                case '3':
                    hotel1.listaQuartosDisponiveis()
                break
                case '4':
                    hotel1.reservarQuarto()
                break        
                }            
            }while(opcao2 != '5')
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









