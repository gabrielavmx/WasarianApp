const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
    const { nome, email, senha, sexo, dt_nasc } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Create the new user
        const newUser = await User.create({
            nome,
            email,
            senha: hashedPassword,
            sexo,
            dt_nasc,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error.message, error.stack);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;