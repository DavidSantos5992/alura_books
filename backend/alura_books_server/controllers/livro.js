const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require('../services/livro')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send('ID inválido')
        }

    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (!livroNovo.id) {
            res.status(422)
            return res.send('O livro deve ter um id')
        }

        if (!livroNovo.nome) {
            res.status(422)
            return res.send('O livro deve ter um nome')
        }

        insereLivro(livroNovo)
        res.status(201)
        res.send('Livro inserido com sucesso!')

    } catch (error) {
        res.status(500)
        res.send({ message: 'Erro ao inserir livro: ' + error.message })
    }
}


function patchLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const modificacoes = req.body
            modificaLivro(modificacoes, id)
            res.send('Livro modificado com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido')
        }

    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }

}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaLivro(id)
            res.send('Livro deletado com sucesso!')
        } else {
            res.status(422)
            res.send('ID inválido')
        }

    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}