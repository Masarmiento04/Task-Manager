const { config } = require ('dotenv')

config()

const configObject = {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PWD,
    dbServ: process.env.SRV_NAME,
    dbName: process.env.DB_NAME
}

module.exports = configObject;
