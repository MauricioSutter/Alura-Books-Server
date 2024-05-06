const { getTodosLivros, getLivroPorId, insereLivro, atualizaLivro, excluiLivroPorId } = require("../servicos/livro")



function getLivros(req, res) {
try{

    const livros = getTodosLivros()
    res.send(livros)

} catch (error){
    res.status(500)
    res.send(error.message)
}}

function getLivro(req, res) {
try{

    const id = req.params.id
    if (id && Number(id)){
        const livro = getLivroPorId(id)
        res.send(livro)
    } else {
        res.status(422)
        res.send("Id invalido!")
    }

} catch (error){
    res.status(500)
    res.send(error.message)
}}

function postLivro(req, res) {

    try{
        const livroNovo = req.body
        if (req.body.title){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O registro necessita de um Title")
        }    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function modificaLivro(req, res) {

    try{

        const id = req.params.id
        if (id && Number(id)){
            const body = req.body
            atualizaLivro(body, id)
            res.status(201)
            res.send("Livro atualizado com sucesso")
        } else {
            res.status(422)
            res.send("Id invalido!")
        }
    
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function deletaLivroPorId(req, res) {
    try{
    
        const id = req.params.id
        if (id && Number(id)){
            excluiLivroPorId(id)
            res.status(200)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id invalido!")
        }
    
    } catch (error){
        res.status(500)
        res.send(error.message)
    }}



module.exports = {
    getLivros,
    getLivro,
    postLivro,
    modificaLivro,
    deletaLivroPorId
}