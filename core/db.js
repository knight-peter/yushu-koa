const Sequelize = require('sequelize')

const {
    database: {
        dbName,
        host,
        port,
        user,
        password,
    }
} = global
const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: true,
    timezone: '+08:00',
    define: {}
})

module.exports = {
    sequelize
}
