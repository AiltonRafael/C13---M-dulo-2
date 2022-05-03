import { connection } from '../database/connection.js'
import { filmes } from '../model/filmes.js'

export const getIndex = async (req, res) => {
    const alunos = await connection.query('SELECT * FROM filmes', {
        model: filmes
    })
    console.log(alunos)
    res.render('index.ejs')
}