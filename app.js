const express = require("express")
const rotalivro = require("./rotas/livro")
const rotalivrofavorito = require("./rotas/favorito")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "http://localhost:3000"}))

app.use('/livros', rotalivro)
app.use('/favoritos', rotalivrofavorito)

const port = 8000


app.listen(port, () => {
    console.log(`escutando tudo ${port}`)
})