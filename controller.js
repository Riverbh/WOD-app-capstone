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
        let {typeWODInput, workoutInput, completedInput} = req.body

        sequelize.query(`
        INSERT INTO wod (wod_type, wod, completed)
        VALUES ('${typeWODInput}', '${workoutInput}', ${completedInput})
        returning *;
        `)
    .then((dbResult) => {
        console.log(dbResult[0])
        res.status(200).send(dbResult[0])
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
    })
  },   

  getWODs: (req, res) => {
    sequelize.query(`
    SELECT *
    FROM wod
    `).then((dbRes) => {
        res.status(200).send(dbRes[0])
    }).catch(err => console.lof(err))
  },
  
  deleteWODs: (req, res) => {
    console.log('running')
    let { wod_id } = req.params
    sequelize.query(`
    DELETE FROM wod
    WHERE wod_id = ${wod_id}
    `) .then((dbRes) => {
        res.status(200).send(dbRes[0])
    }).catch(err => console.log(err))
  }

}

