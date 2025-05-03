const fs = require('fs');
const path = require('path');

const caminhoFavoritos = path.join(__dirname, '..', 'favoritos.json');

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync(caminhoFavoritos));
}

function insereFavorito(favorito) {
    const favoritos = getTodosFavoritos();
    favoritos.push(favorito);
    fs.writeFileSync(caminhoFavoritos, JSON.stringify(favoritos, null, 2));
}

function deletaFavoritoPorId(id) {
    let favoritos = getTodosFavoritos();
    favoritos = favoritos.filter(f => f.id != id); // != para aceitar tanto string quanto number
    fs.writeFileSync(caminhoFavoritos, JSON.stringify(favoritos, null, 2));
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoPorId
};
