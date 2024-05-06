const { Router } = require("express")
const {getLivros, getLivro, postLivro, modificaLivro, deletaLivroPorId} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', modificaLivro)

router.delete('/:id', deletaLivroPorId)

module.exports = router