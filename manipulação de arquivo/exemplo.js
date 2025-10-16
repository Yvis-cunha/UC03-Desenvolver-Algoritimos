import fs from 'fs'

try {
    fs.mkdirSync('ExemploFS') // Criação do diretório
    console.log(`Diretório criado com sucesso!`)
} catch (error) {    
    console.error(`Erro ao criar diretório: ${error.message}`)    
}

try {
    fs.writeFileSync('./ExemploFS/exemplo.js', 'console.log(`Manipulação de Arquivos com Node.js`)', 'utf8') // escrita em arquivo, se o arquivo não existir é criado
        console.log('Arquivo escrito com sucesso!')
} catch (err) {
        console.error('Erro ao escrever o arquivo:', err.message)
}

try {
    fs.appendFileSync('./ExemploFS/exemplo.js', '\nlet modulo = "FS - File System" \nconsole.log(`Manipulação de Arquivos usando  ${modulo}`)', 'utf8') // escrita em arquivo, deixando o conteúdo anterior
        console.log('Arquivo escrito com sucesso!')
} catch (err) {
        console.error('Erro ao escrever o arquivo:', err.message)
}

try {
    let conteudoArquivo = fs.readFileSync('./ExemploFS/exemplo.js', 'utf8') // leitura do arquivo
    console.log('Arquivo lido com sucesso:\n', conteudoArquivo)
} catch (err) {
    console.error('Erro ao ler o arquivo:', err.message)
}

try {
    fs.rmSync('./ExemploFS/exemplo.js') // remoção do arquivo
    console.log('Arquivo removido com sucesso!')
} catch (err) {
    console.error('Erro ao remover o arquivo:', err.message)
}

try {
    fs.rmdirSync('./ExemploFS') // remoção do diretório
    console.log('Diretório removido com sucesso!')
} catch (err) {
    console.error('Erro ao remover o diretório:', err.message)
}

