const { getTodosLivros } = require('../services/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }
}

module.exports = {
    getLivros,
    
}