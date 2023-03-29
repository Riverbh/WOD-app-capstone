const Sequelize = require('sequelize')
require('dotenv').config()

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  })

  module.exports = {
    createWOD: (req, res) => {
        let {type, wod, completed} = req.body

        sequelize.query(`
        INSERT INTO wod (wod_type, wod, completed)
        VALUES (:type, :wod, :completed)
        RETURNING *
        `)
    .then((dbResult) => {
        res.status(200).send(dbResult[0])
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
    })
  },   

}

