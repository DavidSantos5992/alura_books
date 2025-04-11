function getLivros(req, res) {
    try {
        res.send('Rota de livros - GET')
    } catch (error) {
        res.status(500)
        res.send({ message: error.message })
    }
}

module.exports = {
    getLivros,
    
}