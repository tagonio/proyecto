const { DataTypes } = require('sequelize');
const { sequelize } = require("../../config/sql/connection");

const userColumns = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
}


const User = sequelize.define('User', userColumns, { tableName: 'users' });

const customFindOne = async (userToFind) => {
    return await User.findOne({ where: userToFind });
};

const customCreate = async (userData) => {
    return await User.create(userData);
}

User.customFindOne = customFindOne;
User.customCreate = customCreate;

module.exports = User;