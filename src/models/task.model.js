//ES6 import
/* import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';*/
//common JS importer
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');
const State = require('./states.model'); // Asumiendo que ya tienes el modelo de State definido
const User = require('./user.model'); // Asumiendo que ya tienes el modelo de User definido

class Task extends Model { }

Task.init(
    {
        task_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: User, // Modelo de la tabla User
                key: 'user_id' // Clave primaria de la tabla User
            },
            onDelete: 'SET NULL' // Acción ON DELETE
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        due_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_DATE()')
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: State,
                key: 'estado_id'
            }
        }
    },
    {
        sequelize,
        tableName: 'tasks', // Nombre de la tabla en la base de datos
        timestamps: false, // Si no tienes campos de timestamp como createdAt y updatedAt
        modelName: 'Task'
    }
);

module.exports = Task;