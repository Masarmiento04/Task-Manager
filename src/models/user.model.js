/* import { Sequelize, DataTypes } from "sequelize";
import sequelize from ('../config/database') */
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');

class User extends Model { }

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize,
        tableName: 'users',
        modelName: 'User'
    }
);

module.exports = User;