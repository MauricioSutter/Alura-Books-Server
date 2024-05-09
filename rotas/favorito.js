const { Router } = require("express")
const {getLivrosFavoritos, postLivroFavorito, deletaFavoritoPorId} = require("../controladores/favorito")

const router = Router()

router.get('/', getLivrosFavoritos)

router.post('/:id', postLivroFavorito)

router.delete('/:id', deletaFavoritoPorId)

module.exports = router
