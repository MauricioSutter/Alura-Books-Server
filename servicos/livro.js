const { json } = require("express")
const fs = require("fs")

function getTodosLivros() {

    return JSON.parse(fs.readFileSync("livros.json"))

}

function getLivroPorId(id) {

    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === parseInt(id)) [0]

    return livroFiltrado

}

function insereLivro(livroNovo){

    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))

}

function atualizaLivro(modificacoes, id){

    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === parseInt(id))

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function excluiLivroPorId(id){

    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id !== parseInt(id))
    fs.writeFileSync("livros.json", JSON.stringify(indiceModificado))

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    atualizaLivro,
    excluiLivroPorId
}