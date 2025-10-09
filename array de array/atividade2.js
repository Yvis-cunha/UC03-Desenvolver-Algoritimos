import promptSync from 'prompt-sync'
const prompt = promptSync()
import { gerarLista, internar, relatorio, visualizar } from './function.js'

let lista = gerarLista()
let flag = true
do{
    console.log(`
        [====== MENU ======]
        [1] Visualizar leitos e enfermarias
        [2] Internar Paciente
        [3] Relatório de leitos
        [0] Sair`);
    const op = Number(prompt('--> '))
    switch(op){
        case 1:
            visualizar(lista)
            break
        case 2:
            internar(lista)
            break
        case 3:
            relatorio(lista)
            break
        case 0:
            flag = false
            break
    }
}while(flag !== false)