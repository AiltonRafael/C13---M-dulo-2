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

let cavaleiros = [ // banco de dados fake
    {   
        id: 1,
        nome: 'Airos',
        signos: 'Leão',
        img: 'https://static.wikia.nocookie.net/ssu/images/8/8b/Aiolia_Armadura_Divina_card.png'
    },
    {   
        id: 2,
        nome: 'Aldebaran',
        signos: 'Touro',
        img: 'https://pm1.narvii.com/6403/ffe9e1b19c99f2c7da6471cf290c2e7695c15573_hq.jpg'
    },
    {
        id: 3,
        nome: 'Miros',
        signos: 'Escopião',
        img: 'https://i.pinimg.com/736x/3b/53/f9/3b53f97abecb8d86735ea953d8fe635c.jpg'
    },
    {
        id: 4,
        nome: 'Shaka',
        signos: 'Virgem',
        img: 'http://pm1.narvii.com/7321/a4df13e5e19dd0fb961ae5e38b3ec6de84a40916r1-640-800v2_uhq.jpg'
    }
]

app.get('/', (req, res) => { // get é um método HTTP/HTTPS que serve para trazer uma pagina
    res.render('index.ejs', {
        cavaleiros
    })
})

app.get('/detalhes/:id', (req, res) => {
    let cavaleiro = []
    cavaleiros.filter((element) => {
        if(element.id == req.params.id){
            cavaleiro.push(element)
        }
    })
    console.log(cavaleiro)
    res.render('detalhes.ejs', {
        cavaleiro
    })
})