const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Rota de livros')
})

router.post('/', (req, res) => {
    res.send('Rota de livros - POST')
})

router.patch('/', (req, res) => {
    res.send('Rota de livros - PATCH')
})

router.delete('/', (req,res)=>{
    res.send('Rota de livros - DELETE')
})

module.exports = router;