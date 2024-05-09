const { getTodosFavoritos, insereFavorito, excluiFavoritoPorId } = require("../servicos/favorito")



function getLivrosFavoritos(req, res) {

    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivroFavorito(req, res) {

    try{       
        insereFavorito(req.params.id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaFavoritoPorId(req, res) {

    try{    
        const id = req.params.id
        excluiFavoritoPorId(id)
        res.status(200)
        res.send("Livro deletado com sucesso")
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}


    module.exports = {
        getLivrosFavoritos,
        postLivroFavorito,
        deletaFavoritoPorId,
    }