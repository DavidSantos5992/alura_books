const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../services/favorito");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

function postFavorito(req, res) {
    try {
        const favorito = req.body;

        if (!favorito.id) {
            return res.status(422).send("Favorito deve conter um ID.");
        }

        insereFavorito(favorito);
        res.status(201).send("Favorito inserido com sucesso!");
    } catch (error) {
        res.status(500).send({ message: 'Erro ao inserir favorito: ' + error.message });
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletaFavoritoPorId(Number(id));
            res.send("Favorito deletado com sucesso!");
        } else {
            res.status(422).send("ID inválido");
        }

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
};
