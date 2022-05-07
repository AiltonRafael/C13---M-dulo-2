import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    // process.env.DB_URL
    'postgres://filmes_user:6srPbTUMNE1USFC5iBIQYfGMcPq86bPx@dpg-c9qstqf6d9krv7939vq0-a/filmes',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)