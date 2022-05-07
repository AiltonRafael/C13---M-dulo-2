import {
    filmes
} from "../model/filmes.js"

export const getIndex = async (req, res) => {
    try {
        // const listFilmes = await connection.query('SELECT * FROM filmes', {
        //     model: filmes
        // })
        const listFilmes = await filmes.findAll()
        console.log(listFilmes)
        res.render('index.ejs', {
            listFilmes
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        // const filmesDetalhes = await connection.query(`SELECT * FROM filmes WHERE id = ${req.params.id}`)
        const filmesDetalhes = await filmes.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            filmesDetalhes
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        // await connection.query(`DELETE FROM filmes WHERE id = ${req.params.id}`)
        await filmes.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs')
}

export const postCriar = async (req, res) => {
    const {
        nome,
        diretor,
        img,
        duracao,
        ano,
        iframe
    } = req.body
    try {
        // await connection.query(`INSERT INTO filmes (nome, diretor, img, duracao, ano, iframe) VALUES('${nome}', '${diretor}', '${img}', ${duracao}, '${ano}', '${iframe}')`) 
        if (!nome || !diretor || !img || !duracao || !ano || !iframe) {
            res.send('Todos os campos são obrigatórios!')
        } else {
            await filmes.create({
                nome,
                diretor,
                img,
                duracao,
                ano,
                iframe
            })
            res.render('criar.ejs')
        }
    } catch (error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const filmeAtual = await filmes.findByPk(req.params.id)
        res.render('editar.ejs', {
            filmeAtual
        })
    } catch (error) {
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const {
            nome,
            diretor,
            img,
            duracao,
            ano,
            iframe
        } = req.body
        await filmes.update({
            nome: nome,
            diretor: diretor,
            img: img,
            duracao: duracao,
            ano: ano,
            iframe: iframe
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}