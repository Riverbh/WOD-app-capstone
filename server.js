const express = require('express')
const app = express()

const cors = require('cors')
require('dotenv').config()
const {SERVER_PORT} = process.env


app.use(express.json())
app.use(cors())
app.use(express.static('front-end'))

const {
    createWOD,
    getWODs,
    deleteWODs
} = require('./controller.js')

app.post('/wod', createWOD)

app.get('/wod', getWODs)

app.delete('/wod/:id', deleteWODs)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))