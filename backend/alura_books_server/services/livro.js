const fs = require('fs');

function getTodosLivros(params) {
    return JSON.parse(fs.readFileSync('livros.json'))    
} 

mudule.exports = {
    getTodosLivros,
}