const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wasarian', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

sequelize.authenticate()
    .then(() => console.log('Conectado ao MySQL!'))
    .catch(err => console.error('Erro ao conectar ao MySQL:', err));

module.exports = sequelize;