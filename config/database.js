const { Sequelize } = require ("sequelize");
const config = require ('./config');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
    host: config.dbServ,
    dialect: 'mysql',
    port: 3306,
    define:{
        timestamps: false
    }
})

/* async function testConnection() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 
    catch(error){
        console.log('Unable to connect to the database:', error);
    }
}
testConnection(); */

module.exports = sequelize