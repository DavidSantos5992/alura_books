const fs = require('fs');

function getTodosLivros(params) {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter(livro => livro.id == id)[0]

    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))

}

function deletaLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))

    // Remove o livro com o ID especificado
    const livrosRestantes = livrosAtuais.filter(livro => livro.id != id)

    // Atualiza os IDs dos livros restantes para que sejam sequenciais a partir de 1
    const livrosAtualizados = livrosRestantes.map((livro, index) => ({
        ...livro,
        id: index + 1
    }))

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtualizados, null, 2))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}