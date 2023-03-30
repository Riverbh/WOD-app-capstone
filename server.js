const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const {createWOD} = require('./controller')
require('dotenv').config()


app.use(express.json())


const {
    createWOD,
} = require('./controller.js')

app.post('/wod', createWOD)


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))