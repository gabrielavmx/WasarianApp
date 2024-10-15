const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const WaterConsumption = sequelize.define('WaterConsumption', {
    id_meta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'metas',
            key: 'id_meta'
        },
        primaryKey: true
    },
    agua_consumida: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'agua_consumida', // Nome da tabela no MySQL
    timestamps: true,
    primaryKey: false,
    autoIncrement: false
});

module.exports = WaterConsumption;