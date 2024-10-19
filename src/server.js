const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const waterRoutes = require('./routes/water.js');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth.js');
const mealRoutes = require('./routes/meal.js');
const userProfileRoutes = require('./routes/userProfile.js');
const lastMealRoutes = require('./routes/lastMeal.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/water', waterRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/userProfile', userProfileRoutes);
app.use('/meal', mealRoutes);
app.use('/lastMeal', lastMealRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});