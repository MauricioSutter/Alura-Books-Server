const { json } = require("express")
const fs = require("fs")

function getTodosFavoritos() {

    return JSON.parse(fs.readFileSync("favoritos.json"))

}

function insereFavorito(id){

    console.log(id)

    const livros = JSON.parse(fs.readFileSync("livros.json"))    
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroSelecionado = livros.find(livro => livro.id === parseInt(id))
    const novaListaDeLivros = [...livrosFavoritos, livroSelecionado]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivros))

}

function excluiFavoritoPorId(id){

    const livrosAtuais = JSON.parse(fs.readFileSync("favoritos.json"))
    const indiceModificado = livrosAtuais.filter(livro => livro.id !== parseInt(id))
    fs.writeFileSync("favoritos.json", JSON.stringify(indiceModificado))

}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    excluiFavoritoPorId,
}