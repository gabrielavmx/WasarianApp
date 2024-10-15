const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Metas = sequelize.define('Metas', {
    id_meta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    agua_meta: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    caloria_meta: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
}, {
    tableName: 'metas', // Nome da tabela no MySQL
    timestamps: true
});

module.exports = Metas;