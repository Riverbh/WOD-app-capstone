const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())


const {
    createWOD,
} = require('./controller.js')

app.post('/wod', createWOD)