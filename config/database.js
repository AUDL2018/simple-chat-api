const Sequelize = require('sequelize')

const sequelize = new Sequelize('sqlite:./data/database.sqlite', {
    logging: console.log
})

const db = {}

db.sequelize = sequelize

db.messages = sequelize.define('message', {
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = db