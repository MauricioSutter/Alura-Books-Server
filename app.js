const express = require("express")
const rotalivro = require("./rotas/livro")

const app = express()
app.use(express.json())

app.use('/livros', rotalivro)

const port = 8000


app.listen(port, () => {
    console.log(`escutando tudo ${port}`)
})