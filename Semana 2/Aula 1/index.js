import express from 'express' // importando o express
import path from 'path' // servir para defirnir caminhos padrões

const __dirname = path.resolve(path.dirname('')) // __dirname serve para informar qual é o caminho padrão da minha pasta

const app = express() // instnciando o express dentro da const app

app.set("view engine", "ejs") // faz com que o express reconheça o EJS como motor de visualização
app.use(express.static(path.join(__dirname, "public")))

const port = 3003
app.listen(port, () => { // listen é uma função do express para criar servidor
    console.log(`Rondando na porta ${port}`)
})

let cavaleirosDeOuro = [
    {
        nome: 'Airos',
        signos: 'leão'
    },
    {
        nome: 'Aldebaran',
        signos: 'touro'
    },
    {
        nome: 'Miros',
        signos: 'escopião'
    },
    ,
    {
        nome: 'Afrodite',
        signos: 'peixes'
    },
    {
        nome: 'Mu',
        signos: 'Aires'
    }
]

app.get('/', (req, res) => { // get é um método HTTP/HTTPS que serve para trazer uma pagina
    res.render('index.ejs', {
        cavaleirosDeOuro
    })
})

app.get('/detalhes', (req, res) => {
    res.render('detalhes.ejs')
})