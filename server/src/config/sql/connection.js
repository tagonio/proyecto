const { Sequelize } = require('sequelize');
const { sql } = require("../database");
require("../../models");

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
    await sequelize.sync();
    console.log("Migration executed. Tables created");
}


module.exports = connection;
module.exports.sequelize = sequelize;

