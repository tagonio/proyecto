const { Sequelize } = require('sequelize');
const { sql } = require("../database");

const options = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

const sequelize = new Sequelize(sql.uri, options);

const connection = async () => {
    await sequelize.authenticate();
    console.log("Connection enabled using sequelize");
}


module.exports = connection;
