const express = require('express')
const db = require('./config/database')

const app = express()

app.get('/messages', (req, res) => {
    db.messages.findAll().then(messages => {
        res.json(messages)
    })
})

app.get('/messages/generate', (req, res) => {
    db.messages.create({
        text: 'Hello #' + Math.floor(Math.random() * 99999)
    }).then(m => {
        res.json(m)
    })
})

db.sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running!')
    })
})