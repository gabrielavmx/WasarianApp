// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const waterRoutes = require('./routes/water.js');
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json()); // Adiciona o middleware para analisar JSON
app.use(express.urlencoded({ extended: true })); // Adiciona o middleware para analisar URL-encoded data
app.use('/water', waterRoutes);
app.use('/user', userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});