import promptSync from 'prompt-sync'
const prompt = promptSync()

export const gerarLista = () => {
    const matriz = []
    const linhas = 7
    const colunas = 5
    for(let i = 0; i < linhas; i++){
        const leitos = []
        for(let j = 0; j < colunas; j++){
            let situacao = Math.random()
            if(situacao > 0.5){
                situacao = 'L'
            }
            else{situacao = 'O'}
            leitos.push(situacao)
        }
        matriz.push(leitos)
    }
    return matriz
} 

export const visualizar = (lista) => {
    lista.forEach((leito, l) => {
        console.log(`
            [======== LEITO N-${l} ========]`);
        lista[l].forEach((vagas, i) => {
            if(vagas === 'O'){vagas = 'OCUPADO'}
            if(vagas === 'L'){vagas = 'LIVRE'}
            console.log(`
                Vaga [${i+1}] -> ${vagas}`);
        });
    });
}

export const internar = (lista) => {
    let leito = Number(prompt('Informe o leito onde irá ser internado -> '))
    const disponivel = lista[leito].some(vaga => vaga === 'L')
    if(!disponivel){console.log('Não há vagas disponível nesse leito!');}
    else{
        lista[leito].forEach((vaga, i) => {
            if(vaga === 'L'){
                console.log(`
                    Vaga [${i+1}] - Disponível`);
            }
        });
        let inserir = Number(prompt('Selecione a vaga -> '))
        if(lista[leito][inserir] === 'O'){
            console.log(`A VAGA NÃO ESTÁ DISPONÍVEL`);
        }
        else{lista[leito][inserir-1] = 'O'}
    }
}

export const relatorio = (lista) => {
    let leitos_lotados = 0
    let ocupados = 0
    let livres = 0
    lista.forEach(leito => {
        if(leito.every(vaga => vaga === 'O')){
            leitos_lotados += 1
        }
        livres += leito.reduce((contador, vaga) => {
            if(vaga === 'L'){
                return contador + 1
            }
            return contador
        },0)
        ocupados += leito.reduce((contador, vaga) => {
            if(vaga === 'O'){
                return contador + 1
            }
            return contador
        },0)
    });
    console.clear()
    console.log(`
        [======== RELATÓRIO] ========]
        Leitos totais -> 5 (${leitos_lotados} lotados)
        -----------------------------------------------
        Vagas livres -> ${livres}
        -----------------------------------------------
        Ocupados -> ${ocupados}
        -----------------------------------------------
        [============== FIM DO RELATÓRIO ==============]`);
}