//common JS importer
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');

class State extends Model { }

State.init(
    {
        estado_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre_estado: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        proceso: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'states', // Nombre de la tabla en la base de datos
        timestamps: false // Si no tienes campos de timestamp como createdAt y updatedAt
    }
);

module.exports = State;