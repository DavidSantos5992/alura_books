const { Router } = require('express');
const { getLivros } = require('../controllers/livro')
const router = Router();

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Rota de livros - POST')
})

router.patch('/', (req, res) => {
    res.send('Rota de livros - PATCH')
})

router.delete('/', (req, res) => {
    res.send('Rota de livros - DELETE')
})

module.exports = router;