const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const MealRegistration = sequelize.define('MealRegistration', {
    id_meta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'metas',
            key: 'id_meta'
        },
        primaryKey: true
    },
    tipo_refeicao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    caloria: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'registro_refeicoes',
    timestamps: true,
    primaryKey: false,
    autoIncrement: false,
});

module.exports = MealRegistration;
